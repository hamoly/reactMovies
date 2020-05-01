import React from 'react';
import Movie from './movie'
import ShowMsg from '../showmsg';

const MovieListRenderer = (props) => {
    const { error, isLoaded, movies, query, handleFav, filter, display} = props;
    return (
      error ? 
      <ShowMsg msg='ERROR : Please check your internet connection then reload the page' /> 
      :
      (!isLoaded
      ?
      <ShowMsg msg='Please wait while fetching movies ...' />
      :
      (movies.length > 0 ?
        <Movie movie={movies} filter={filter} display={display} handleFav={handleFav} query={query} />
        :
        <ShowMsg msg='Sorry there are no movies in this list ...' />
        )
      )
      )
  }

export default MovieListRenderer