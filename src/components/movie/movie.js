import React from 'react';
import LazyImage from './img';
import MovieMain from './main';
import MovieOverview from './overview';
import MovieStates from './states';
import MovieFavBtn from './likeBtn';

const Movie = (props) => {
    let {movie, handleFav} = props
    return (
        movie.map(({id, poster_path, title, release_date, overview, popularity, vote_count} = {}) => (
            <div className="row shadow mb-4" key={id}>
                <LazyImage src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`} />
                <div className="col-lg-9 col-md-12 col-sm-12 bg-light">
                <MovieMain movieTitle={title} movieReleaseDate={release_date} />
                <MovieOverview movieOverviewText={overview} />
                <MovieStates MoviePopularityVal={popularity} MovieVoteCountVal={vote_count}/>
                <MovieFavBtn id={id} handleFav={handleFav} />
                </div>
            </div> 
            )
    ))
}

export default Movie