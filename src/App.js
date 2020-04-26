import React, { Component } from 'react';
import axios from 'axios';
import MovieListRenderer from './components/movie'
import Navbar from './components/navbar';

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
    }
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_MOVIE_API_KEY}`)
      .then((result) => {
        this.setState({
          query: '',
          movies : result.data.results,
          isLoaded : true
        });
      }).catch((error) => {
        this.setState({
          isLoaded : false,
          error
        })
      });
  }
  
  handleSearch = (e) => {
    this.setState({
      query: e.target.value
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
    const {liked, query, error, isLoaded, movies} = this.state
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar query={this.handleSearch} liked={liked} value={query}/>
        </div>
        <div className="container mt-115">
        {this.props.display === 'liked'
          ?
          <MovieListRenderer query={query} movies={liked} handleFav={this.addToLiked} error={error} isLoaded={isLoaded} />
          :
          <MovieListRenderer query={query} movies={movies} handleFav={this.addToLiked} error={error} isLoaded={isLoaded} />
        }
        </div>
      </div>
      )
  };
}

export default App;