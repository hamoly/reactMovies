import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie.js';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props)
    // state
    this.state = {
      movies : []
    }
  }
  componentWillMount() {
    axios('https://api.themoviedb.org/4/list/138364?page=1&api_key=9028a69bcecf6d4197cb7d920ae88751')
    .then((result) => {
      this.setState({
        movies : result.data.results
      });
      console.log(result.data.results)
    }).catch((err) => {
      console.log(err);
    });
  }
  componentDidMount(){
    document.title = "React Movies"
  }
  
  render() {
    return (
      <div className="App bg-dark">
       {this.state.movies.map(movie =>
        <div className="container">
        <Movie key={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} popularity={movie.popularity} vote_count={movie.vote_count} />
        <hr />
        </div>
         )
        }
       
        </div>


     
    );
  }
}

export default App;
