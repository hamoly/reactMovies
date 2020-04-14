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

  handleLiked = (e) => {
    const {movies, liked} = this.state
    const {id} = e.target
    console.log(liked)
    if(liked.some(fav => fav.id === parseInt(id))) {
      this.setState({
        liked: liked.filter(fav => { return fav.id !== parseInt(id)})
      })
      document.getElementById(id).classList.remove('badge-danger')
      document.getElementById(id).value='Like'
    } else {
      const favedObject = movies.filter(movie => movie.id === parseInt(id))
      this.setState({liked: [...liked, ...favedObject]})
      document.getElementById(id).classList.add('badge-danger')
      document.getElementById(id).innerText='Liked'
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar query={this.handleSearch} value={this.state.query}/>
        </div>
        <div className="container mt-115">
        {this.props.display === 'liked'
          ?
          <MovieListRenderer query={this.state.query} movies={this.state.liked} handleFav={this.handleLiked} error={this.state.error} isLoaded={this.state.isLoaded} />
          :
          <MovieListRenderer query={this.state.query} movies={this.state.movies} handleFav={this.handleLiked} error={this.state.error} isLoaded={this.state.isLoaded} />
        }
        </div>
      </div>
      )
  };
}

export default App;