import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieListApp from './components/movie';
import ShowMsg from './components/showmsg';
import Navbar from './components/navbar';

const App = () => {
  const [link, setLink] = useState(process.env.REACT_APP_API_FETCH_URL);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    if(e.target.value !== '') {
      setQuery(e.target.value);
      setLink(`${process.env.REACT_APP_API_SEARCH_URL}${e.target.value}`);
    } else {
      setLink(process.env.REACT_APP_API_FETCH_URL);
      setQuery('')
    }
  };
  const MovieAppRenderer = () => {
    if (error) {
      return (
        <ShowMsg msg='ERROR : Please check you internet connection then reload the page' />
      );
    } else if (!isLoaded) {
      return (
        <ShowMsg msg='Please wait while fetching movies ...' />
      );
    } else if (movies.length == 0) {
      return (
        <ShowMsg msg="Sorry couldn't find any search results ... please try another title …" />
      );
    } else {
      return (
        movies.map(movie => (
            <MovieListApp key={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} overview={movie.overview} popularity={movie.popularity} vote_count={movie.vote_count} />
            )) 
      );
    }
}
  useEffect(() => {
    axios.get(link)
    .then((result) => {
      setError(null)
      setMovies(result.data.results);
      console.log(result);
      setIsLoaded(true);
    }).catch((error) => {
      setError(error)
    }); }, [link, query]);

/*
  const handleInputChange = () => {
    setState({
      query: search.value
    }, () => {
      if (query && query.length > 1) {
        if (query.length % 2 === 0) {
          getMovies(`${process.env.REACT_APP_API_SEARCH_URL}${query}`)
          console.log(query)
        }
      } else {
        setState({
          query : ''
        })
        getMovies(`${process.env.REACT_APP_API_FETCH_URL}`);

      } 
    })
  }


}  */
    return (
      <div className="App">
      <div className="container-fluid">
      <Navbar inputValue={query} handleChangeValue={handleChange}/>
      </div>
        <div className="container mt-115">
          <MovieAppRenderer />
        </div>
      </div>
      )
    }

    


export default App;