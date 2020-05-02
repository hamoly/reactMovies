import React, { Component } from 'react';
import axios from 'axios';
import MovieListRenderer from './components/movie'
import Navbar from './components/navbar';
import ShowMsg from './components/showmsg';

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      error : null,
      isLoaded : false,
      movies : [],
      liked: [],
      query: '',
      filtered: []
    }
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then((result) => {
        this.setState({
          movies : result.data.results,
          isLoaded : true,
        });
      }).catch((error) => {
        this.setState({
          error
        })
      });
  }
  
  handleSearch = (e) => {
    let {liked, movies} = this.state
    let searchInput = e.target.value
    this.setState({
      query: searchInput
    }, function () {
      let movieList = this.props.display === 'liked' ? liked : movies
      this.setState({
        filtered: movieList.filter(movie => {
          return movie.title.toLowerCase().indexOf(
          this.state.query.toLowerCase()) !== -1 ;
        })
      })
    });   
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
    const {liked, error, isLoaded, movies, filtered, query} = this.state
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar query={this.handleSearch} liked={liked}/>
        </div>
        <div className="container mt-115">
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
          <MovieListRenderer movies={movies} handleFav={this.addToLiked} error={error} isLoaded={isLoaded} />
          ))
        }
        </div>
      </div>
      )
  };
}

export default App;