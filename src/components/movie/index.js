import React from 'react';
import Movie from './movie'
import ShowMsg from '../showmsg';

const MovieListRenderer = (props) => {
    const { error, isLoaded, movies, query, handleFav} = props;
    return (
      error ? 
      <ShowMsg msg='ERROR : Please check your internet connection then reload the page' /> 
      :
      (!isLoaded ? <ShowMsg msg='Please wait while fetching movies ...' />
      :
      <Movie movie={movies} handleFav={handleFav} query={query} />)
      )
  }

export default MovieListRenderer