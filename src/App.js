import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import ShowMsg from './ShowMsg.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      movies : [],
      loading : false
    }
  }
  getMovies()  {
    axios('https://api.themoviedb.org/4/list/138364?page=1&api_key=9028a69bcecf6d4197cb7d920ae88751')
    .then((result) => {
      this.setState({
        movies : result.data.results,
        loading : true
      });
    }).catch((err) => {
      this.setState({
        loading : false
      })
    });
  }
  componentWillMount() {
    this.getMovies();
  }
  componentDidMount(){
    document.title = "React Movies"
  }
  
  render() {
    return (
      <div className="App bg-dark">
      <div className="container">

       {this.state.loading ?
        this.state.movies.map(movie => (
          <>
        <Movie key={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} popularity={movie.popularity} vote_count={movie.vote_count} />
        <hr />
        </>
        )) : <ShowMsg msg='Please wait while fetching movies ...' />}
        </div>
      </div>
    );
  }
}

export default App;
