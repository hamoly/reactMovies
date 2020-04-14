import React from 'react';
import LazyImage from './img';
import MovieMain from './main';
import MovieOverview from './overview';
import MovieStates from './states';
import MovieFavBtn from './favBtn';

const Movie = (props) => {
    let filteredMovies = props.movie.filter(movie => {
        return movie.title.toLowerCase().indexOf(
        props.query.toLowerCase()) !== -1 ;
        })
    return (
        filteredMovies.map(movieData => (
            <div className="row shadow mb-4" key={movieData.id}>
                <LazyImage src={`https://image.tmdb.org/t/p/w440_and_h660_face${movieData.poster_path}`} />
                <div className="col-lg-9 col-md-12 col-sm-12 bg-light">
                <MovieMain movieTitle={movieData.title} movieReleaseDate={movieData.release_date} />
                <MovieOverview movieOverviewText={movieData.overview} />
                <MovieStates MoviePopularityVal={movieData.popularity} MovieVoteCountVal={movieData.vote_count}/>
                <MovieFavBtn id={movieData.id} handleFav={props.handleFav} />
                </div>
            </div>
            ))
    )
}

export default Movie