import React, { Component } from 'react';
import axios from 'axios';
import MovieListRenderer from './components/movie'
import Navbar from './components/navbar';
import ShowStaticMsg from './components/msg/showstaticmsg';
import Login from './components/user/login';
import UserStateMsg from './components/user/userstatemsg'
import {db, fire} from './config/'

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      user: null,
      email: '',
      password: '',
      error : null,
      isLoaded : false,
      movies : [],
      liked: [],
      query: '',
      filtered: [],
      pageNumber: 1,
      userStateMsg: '',
      userStateClass: '',
      sharedList: [],
      display: ''
    }
  }

  componentDidMount(){
    this.setState({
      // setting which list to be displayed 
      display:this.props.display
    })
    
    // firing firebase authentication
    this.authLestiner();
    // firing trackScrolling on scroll to load next page contents
    document.addEventListener('scroll', this.trackScrolling);
    // firing display user liked list
    // Example http://localhost:3000/?userlist=NAkqWaLiy9g7oqx8dc6k2zdLPyp2
    this.displayLikedList();
    // Fetching movies list from the api and setting the state
    this.fetchMovies();
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.display !== this.props.display) {
      this.setState({
        // whatching different routs to update rendered list
        display: this.props.display
      })
    }
    // updatinge user state messages
    if (prevState.userStateMsg !== this.state.userStateMsg) {
      this.setStateClass()
    }
    // updating firestore liked list
    if (prevState.liked !== this.state.liked) {
      this.updateFirestore()
    }
    // updating logged user credentials
    if (prevState.user !== this.state.user) {
      this.getFirestore()
    }
    // setting display list source
    if (prevState.query !== this.state.query) {
    this.setDisplayList()
    }
    if(prevState.liked !== this.state.liked || prevState.movies !== this.state.movies || prevState.filtered !== this.state.filtered) {
      this.lazyLoadImages();
    }
  }
// authenticating  and updating logged user state and credentials
  authLestiner = () => {
    fire.auth().onAuthStateChanged((user) => {
      user ?
        this.setState({
          user,
        })
      :
      this.setState({
        user: null,
      })
    })
  }
// setting user email state
  setEmailState = (userEmail) => {
    let email = userEmail.target.value
    this.setState({email})
  }
// setting user password state
  setPasswordState =(userPassword) => {
    let password = userPassword.target.value
    this.setState({password})
  }
  setStateUserForm = (e) => {
    // setting user form Login/Logout state
    const {email, password} = this.state
    e.target.name === 'Login' ?
      this.handleLogIn(email, password)
    :
      this.handleSignUp(email, password)
  }
  setStateClass = () => {
    // Display user state message box
    this.setState({
      userStateClass: 'userStateAnim'
    })
      setTimeout(() => {
          this.setState({
            userStateClass: ''
        })
      }, 2000);
  }
  // Authenticating firebase user login
  handleLogIn = (email, password) => {
    fire.auth().signInWithEmailAndPassword(email, password)
    .then((user) =>{
      this.setState({
        user,
        userStateMsg:'You are logged in successfully',
      })
    })
    .catch((error) =>{
      this.setState({
      userStateMsg: error.toString()
      })
    })
  }
// Registering new firebase user
  handleSignUp = () => {
    const {email, password} = this.state
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // setting liked list to the new user
      db.collection('users').doc(user.user.uid).set({
        liked: []
      })
      this.setState({
        // updating user state
        user,
        // updating user state message
        userStateMsg: 'Welcome ... Your account created successfully'
      })
    })
    .then(() =>{
      // fire login process for the new user
      this.handleLogIn(email, password)
    })
    .catch((error) =>{
      this.setState({
        userStateMsg: error.toString()
      })
    })
  }
// Loging out firebase user
  handleLogOut = () => {
    fire.auth().signOut()
    .then(() =>{
      this.setState({
        // updating user state
        user:null,
        // updating user state message
        userStateMsg: 'You are logged out successfully'
      })
    })
    .catch((error) => {
      this.setState({
      userStateMsg: error.toString()
    })
    })
  }
  // fetching movies list from the api
  fetchMovies = () => {
    axios.get(`${process.env.REACT_APP_MOVIE_API_KEY}${this.state.pageNumber}`)
    .then((result) => {
      this.setState({
        // setting movies list and loading state 
        movies : [...this.state.movies, ...result.data.results],
        isLoaded : true,
      })
    }).then(() => {
      this.incremntPageNumber();
    }).catch((error) => {
      this.setState({
        error
      })
    });
  }
  // Lazyload Images
  lazyLoadImages = () => {
    const targets =  document.querySelectorAll('img');
    console.log(targets)
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
          const img = entry.target;
          const src = img.getAttribute('id');
          img.setAttribute('src', src);
          img.classList.add('imgLoaded')
          observer.disconnect();
      }
    })
    })
    targets.forEach(target => {
      observer.observe(target);
      console.log(target)
    })
    }
    
// page number tracking and incrementing for pagination 
  incremntPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    })
  }
  // Tracking scroll to the bottom then feching next page list
  trackScrolling = () => {
    if(this.props.display === 'movies') {
      const wrappedElement = document.getElementById('movies');
      if(this.isBottom(wrappedElement)) {
        this.fetchMovies();
      }
    }
  }
// checking if bottom
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
// updating query state by search input value
  handleSearch = (e) => {
    let searchInput = e.target.value
    this.setState({
      query: searchInput
    })   
  }
  // setting searching source list
  setDisplayList = () => {
      let {liked, movies, query} = this.state
      let movieList = this.props.display === 'liked' ? liked : movies
      this.setState({
        filtered: movieList.filter(movie => {
          return movie.title.toLowerCase().indexOf(
          query.toLowerCase()) !== -1 ;
        })
      })
  }
  // checking movie like button state
  likedMovieState = (id) => {
    return this.state.liked.some(liked => liked.id === parseInt(id))
  }
// adding liked movie to liked list
  addToLiked = (e) => {
    const {movies, liked} = this.state
    const {id} = e.target
    if(this.likedMovieState(id)) {
      this.setState({
        liked: liked.filter(liked => { return liked.id !== parseInt(id)})
      })
    } else {
      const favedObject = movies.filter(movie => movie.id === parseInt(id))
      this.setState({
        liked: [...liked, ...favedObject],
        userStateMsg: 'this movie successfully liked'
      })
    }
  }
  // getting user liked list from firestore
  readFirestoreData = (uid) => {
    db.collection("users").doc(uid)
    .get()
    .then(querySnapshot => {
      let snapShot = querySnapshot.data()
      this.setState({
        // updating shared liked movies list state
        sharedList : snapShot.liked,
        // setting display soruce
        display : 'sharedList'
      })
      }
    )
    .catch( () => {
        this.setState({
          userStateMsg: "Sorry, Can't find this list "
        })
    });
  }
  // updating firebase user liked list
  updateFirestore = () => {
    const {user} = this.state
    if(user) {
    db.collection('users').doc(user.uid).set({
      liked: [...this.state.liked]
    })
  }
  }
// getting firebase user liked list
  getFirestore = () => {
    const {user} = this.state
    if(user && user.uid) {
    const docRef = db.collection('users').doc(user.uid)
    docRef.get()
    .then((doc) => {
      if(doc.exists) {
        const likedArry = doc.data();
        const liked = likedArry.liked
        this.setState ({
          // updating liked list state
          liked
        })        
    }
    })
  
    }
  }
  // getting user shared liked list from firestore
  displayLikedList = () => {
    let params = new URLSearchParams(document.location.search.substring(1));
    let uid = params.get("userlist");
    if(uid) {
      this.readFirestoreData(uid);
    }
  }

  render() {
    const {liked, sharedList, userStateMsg, display, userStateClass, error, isLoaded, movies, filtered, query, user, userEmail, userPassword} = this.state
    let renderedMovieList;
    // Setting which list to be displayed 
    query !== ''
      ?
        renderedMovieList = filtered
      :(
        display === 'movies'
      ?
        renderedMovieList = movies
      :(display === 'liked'
      ?
        renderedMovieList = liked
        :
        renderedMovieList = sharedList
        )
      )

      return (
      <div className="App">
      {userStateMsg !== '' ? <UserStateMsg userStateClass={userStateClass} userStateMsg={userStateMsg} /> : ''}
        <div className="container-fluid">
          <Navbar query={this.handleSearch} search={query} handleLogOut={this.handleLogOut} liked={liked} user={user}/>
        <div className="mt-115" id="movies">
          {display === 'login' || display === 'signup'
          ?
          <Login display={display} setStateUserForm={this.setStateUserForm}
          setEmailState={this.setEmailState} setPasswordState={this.setPasswordState}
          email={userEmail} password={userPassword} userStateMsg={userStateMsg}/>
          :
          (renderedMovieList === filtered && filtered.length === 0 && query !== ''
          ?
          <ShowStaticMsg msg='No movies found ... Please try another title ...' />
          :
          <MovieListRenderer displayLikedList={this.displayLikedList} display={display} likedMovieState={this.likedMovieState} user={user} movies={renderedMovieList} handleFav={this.addToLiked} error={error} isLoaded={isLoaded} />
          )
        }
        </div>
        </div>
      </div>
      )
  };
}

export default App;