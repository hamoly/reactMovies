import React from 'react';
import Movie from './movie'

const MovieListApp = ({...movie}) => {
    const {poster_path, title, release_date, overview, popularity, vote_count} = movie
    return (
    <Movie poster_path={poster_path} title={title} release_date={release_date} overview={overview} popularity={popularity} vote_count={vote_count} />
    )
}


export default MovieListApp