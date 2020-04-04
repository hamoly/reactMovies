import React from 'react';
import MovieImg from './MovieImg';
import MovieMain from './MovieMain/MovieMain';
import MovieOverview from './MovieOverview/MovieOverview';
import MovieStates from './MovieStates/MovieStates';


const Movie = (movie) => {
    return (
    <div className="row shadow m-auto">
        <MovieImg key={movie.id} movieImagePath={movie.poster_path} />
        <div className="col-lg-9 col-md-12 col-sm-12 bg-light">
        <MovieMain key={movie.id} movieTitle={movie.title} movieReleaseDate={movie.release_date} />
        <MovieOverview key={movie.id} movieOverviewText={movie.overview} />
        <MovieStates key={movie.id} MoviePopularity={movie.popularity} MovieVoteCount={movie.vote_count}/>
        </div>
    </div>
    )
}

export default Movie