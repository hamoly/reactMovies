import React from 'react';
import MovieImg from './movieImg';
import MovieMain from './moviemain';
import MovieOverview from './movieoverview';
import MovieStates from './moviestates';

const Movie = ({...movie}) => {
    const {poster_path, title, release_date, overview, popularity, vote_count} = movie
    return (
    <div className="row shadow mb-4">
        <MovieImg movieImagePath={poster_path} />
        <div className="col-lg-9 col-md-12 col-sm-12 bg-light">
        <MovieMain movieTitle={title} movieReleaseDate={release_date} />
        <MovieOverview movieOverviewText={overview} />
        <MovieStates MoviePopularityVal={popularity} MovieVoteCountVal={vote_count}/>
        </div>
    </div>
    )
}

export default Movie