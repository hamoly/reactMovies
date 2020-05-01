import React from 'react';
import MoviePopularity from './moviepopularity';
import MovieVoteCount from './movievotecount';

const MovieStates = ({MoviePopularityVal, MovieVoteCountVal}) => {
return (
    <>
    <MoviePopularity MoviePopularity= {MoviePopularityVal} />
    <MovieVoteCount MovieVoteCount={MovieVoteCountVal} />
    </>
    )
}

export default MovieStates;