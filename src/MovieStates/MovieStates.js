import React from 'react';
import MoviePopularity from './MoviePopularity';
import MovieVoteCount from './MovieVoteCount';
import 'bootstrap/dist/css/bootstrap.css';

const MovieStates = (props) => {
return (
    <>
    <MoviePopularity MoviePopularity= {props.MoviePopularity} />
    <MovieVoteCount MovieVoteCount={props.MovieVoteCount} />
    </>
    )
}

export default MovieStates;