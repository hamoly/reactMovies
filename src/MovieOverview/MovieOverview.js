import React from 'react';
import MovieOverviewtext from './MovieOverviewtext';
import MovieOverviewtitle from './MovieOverviewtitle';
import 'bootstrap/dist/css/bootstrap.css';

const MovieOverview = (props) => {
return (
    <>
    <MovieOverviewtitle OverviewTitle= "Overview" />
    <MovieOverviewtext OverviewText={props.movieOverviewText}/>
    </>
    )
}

export default MovieOverview;