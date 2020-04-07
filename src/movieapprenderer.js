import React from 'react';
import MovieListApp from './components/movie';
import ShowMsg from './components/showmsg';

const MovieAppRenderer = () => {
    if (error) {
      return (
        <ShowMsg msg='ERROR : Please check you internet connection then reload the page' />
      );
    } else if (!isLoaded) {
      return (
        <ShowMsg msg='Please wait while fetching movies ...' />
      );
    } else {
      return (
        movies.map(() => (
            <MovieListApp />
            )) 
      );
    }
}
    export default MovieAppRenderer;