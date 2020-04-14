import React from 'react';
import Movie from './movie'
import ShowMsg from '../showmsg';

const MovieListRenderer = (props) => {
    const { error, isLoaded, movies, query, handleFav } = props;
    if (error) {
      return (
        <ShowMsg msg='ERROR : Please check your internet connection then reload the page' />
      );
    } else if (!isLoaded) {
      return (
        <ShowMsg msg='Please wait while fetching movies ...' />
      );
    } else {
      return (
          <Movie movie={movies} handleFav={handleFav} query={query} />
      );
    }
  }

  export default MovieListRenderer