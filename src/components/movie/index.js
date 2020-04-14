import React from 'react';
import Movie from './movie'
import ShowMsg from './showmsg';

const msgHandler = () => {
    let msgtxt
}

MovieAppRenderer (){
    const { error, isLoaded, movies } = this.state;
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
            <MovieListApp />
      );
    }
  }