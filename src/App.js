import React, { Component } from 'react';
import axios from 'axios';
import MovieListApp from './components/movie';
import ShowMsg from './components/showmsg';
import Search from './components/search';

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      error : null,
      isLoaded : false,
      movies : [],
      favorits: []
      
    }
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
  componentDidMount(){
    this.getMovies(`https://api.themoviedb.org/4/list/138364?page=1&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getMovies(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${this.state.query}`)
          console.log(this.state.query)
        }
      } else {
        this.setState({
          query : ''
        })
        this.getMovies(`https://api.themoviedb.org/4/list/138364?page=1&api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);

      } 
    })
  }
  handleFavorits(id) {
    
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search query={this.handleInputChange}/>
          <MovieAppRenderer movieArr={this.state.movies}/>
        </div>
      </div>)
  };
}


export default App;