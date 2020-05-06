import React, { Component } from 'react';
import axios from 'axios';
import MovieListRenderer from './components/movie'
import Navbar from './components/navbar';
import ShowMsg from './components/showmsg';
import Login from './components/user/login';
import UserStateMsg from './components/user/userstatemsg'
import fire from './config/'
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
      userStateClass: ''
    }
  }

  componentDidMount(){
    this.authLestiner();
    this.fetchMovies();
    document.addEventListener('scroll', this.trackScrolling);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.userStateMsg !== this.state.userStateMsg) {
      this.setStateClass()
    }
  }

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

  setEmailState = (userEmail) => {
    let email = userEmail.target.value
    this.setState({email})
  }
  setPasswordState =(userPassword) => {
    let password = userPassword.target.value
    this.setState({password})
  }
  setStateUserForm = (e) => {
    const {email, password} = this.state
    e.target.name === 'login' ?
      this.handleLogIn(email, password)
    :
      this.handleSignUp(email, password)
  }
  setStateClass = () => {
    this.setState({
      userStateClass: 'userStateAnim'
    })
      setTimeout(() => {
          this.setState({
            userStateClass: ''
        })
      }, 2000);
  }
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
      userStateMsg:error.toString()
      })
    })
  }

  handleSignUp = () => {
    const {email, password} = this.state
    fire.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      this.setState({
        user,
        userStateMsg:'Welcome ... Your account created successfully'
      })
    })
    .then(() =>{
      this.handleLogIn(email, password)
    })
    .catch((error) =>{
      this.setState({
        userStateMsg:error.toString()
      })
    })
  }

  handleLogOut = () => {
    fire.auth().signOut()
    .then(() =>{
      this.setState({
        user:null,
        userStateMsg:'You are logged out successfully'
      })
    })
    .catch((error) => {
      this.setState({
      userStateMsg: error.toString()
    })
    })
  }

  fetchMovies = () => {
    axios.get(`${process.env.REACT_APP_MOVIE_API_KEY}${this.state.pageNumber}`)
    .then((result) => {
      this.setState({
        movies : [...this.state.movies, ...result.data.results],
        isLoaded : true,
      }, this.incremntPageNumber());
    }).catch((error) => {
      this.setState({
        error
      })
    });
  }

  incremntPageNumber = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1
    })
  }
  trackScrolling = () => {
    const wrappedElement = document.getElementById('movies');
    if(this.isBottom(wrappedElement)) {
      this.fetchMovies();
    }
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  handleSearch = (e) => {
    let searchInput = e.target.value
    this.setState({
      query: searchInput
    }, this.setDisplayList())   
  }
  setDisplayList = () => {
      let {liked, movies} = this.state
      let movieList = this.props.display === 'liked' ? liked : movies
      this.setState({
        filtered: movieList.filter(movie => {
          return movie.title.toLowerCase().indexOf(
          this.state.query.toLowerCase()) !== -1 ;
        })
      })
  }
  addToLiked = (e) => {
    const {movies, liked} = this.state
    const {id} = e.target
    if(liked.some(fav => fav.id === parseInt(id))) {
      this.setState({
        liked: liked.filter(fav => { return fav.id !== parseInt(id)})
      })
      this.handleLikedBtn(e, 'Like')
    } else {
      const favedObject = movies.filter(movie => movie.id === parseInt(id))
      this.setState({liked: [...liked, ...favedObject]})
      this.handleLikedBtn(e, 'Liked')
    }
  }

  handleLikedBtn = (e, txt) =>{
    e.target.classList.remove('btn-secondary', 'add', 'btn-danger', 'remove')
    document.getElementById(e.target.id).innerText=txt

    txt === 'Liked'
    ?
    e.target.classList.add('btn-danger', 'remove')
    : 
    e.target.classList.add('btn-secondary', 'add')

  }

  render() {
    const {liked, userStateMsg, userStateClass, error, isLoaded, movies, filtered, query, user, userEmail, userPassword} = this.state
    return (
      <div className="App">
      {userStateMsg !== '' ? <UserStateMsg userStateClass={userStateClass} userStateMsg={userStateMsg} /> : ''}
        <div className="container-fluid">
          <Navbar query={this.handleSearch} handleLogOut={this.handleLogOut} liked={liked} user={user}/>
        </div>
        <div className="container mt-115" id="movies">
        {query !== ''
          ?
          <MovieListRenderer movies={filtered} handleFav={this.addToLiked} error={error} isLoaded={isLoaded} />
          :
          (filtered.length < 1 && query !== ''
          ?
          <ShowMsg msg='No movies found ... Please try another title ...' />
          :
          (this.props.display === 'liked'
          ?
          <MovieListRenderer movies={liked} handleFav={this.addToLiked} error={error} isLoaded={isLoaded} />
          :
          (this.props.display === 'login' || this.props.display === 'signup'
          ?
          <Login display={this.props.display} setStateUserForm={this.setStateUserForm}
          setEmailState={this.setEmailState} setPasswordState={this.setPasswordState}
          email={userEmail} password={userPassword} userStateMsg={userStateMsg}/>
          :
          <MovieListRenderer movies={movies} handleFav={this.addToLiked} error={error} isLoaded={isLoaded} />
          )))
        }
        </div>
      </div>
      )
  };
}

export default App;