import React, { Component } from 'react';
import axios from 'axios';
import MovieListRenderer from './components/movie'
import Favorits from './components/favorits';
import Navbar from './components/navbar';

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      error : null,
      isLoaded : false,
      movies : [],
      favorits: [],
      query: ''
    }
  }

  componentDidMount(){
    this.getMovies(`${process.env.REACT_APP_MOVIE_API_KEY}`);
  }
  
  getMovies(link)  {
    axios.get(link)
    .then((result) => {
      this.setState({
        query: '',
        movies : result.data.results,
        isLoaded : true
      });
    }).catch((error) => {
      this.setState({
        isLoaded : true,
        error
      })
    });
  }

  handleSearch = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleFavorits = (e) => {
    const {favorits} = this.state
    if(favorits.length === 0 || !favorits.includes(e.target.id)) {
      this.setState({favorits: [...favorits, e.target.id]})
      e.target.classList.add('badge-danger')
      e.target.innerText='Loved'
      console.log(favorits)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Navbar query={this.handleSearch} value={this.state.query}/>
        </div>
        <div className="container mt-115">
          <ul className="list-group list-group-horizontal mb-3">
            <Favorits fav={this.state.favorits} />
          </ul>
          <MovieListRenderer query={this.state.query} movies={this.state.movies} handleFav={this.handleFavorits} error={this.state.error} isLoaded={this.state.isLoaded} />
        </div>
      </div>)
  };
}

export default App;