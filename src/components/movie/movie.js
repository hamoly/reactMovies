import React from 'react';
import LazyImage from './img/index';
import MovieMain from './main';
import MovieOverview from './overview';
import MovieStates from './states';
import LikeBtn from './likeBtn';
const Movie = (props) => {
	let { movie, handleFav, user, likedMovieState } = props;
	return movie.map(
		({
			id,
			poster_path,
			title,
			release_date,
			overview,
			popularity,
			vote_count,
		} = {}) => (
			<div className='row shadow m-5' key={id}>
				<LazyImage
					src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`}
				/>
				<div className='col-lg-9 col-md-12 col-sm-12 bg-light'>
					<MovieMain movieTitle={title} movieReleaseDate={release_date} />
					<MovieOverview movieOverviewText={overview} />
					<MovieStates
						MoviePopularityVal={popularity}
						MovieVoteCountVal={vote_count}
					/>
					{user && likedMovieState(id) ? (
						<LikeBtn
							id={id}
							className='btn btn-danger remove'
							text='Liked'
							handleFav={handleFav}
						/>
					) : user ? (
						<LikeBtn
							id={id}
							className='btn btn-secondary add'
							text='Like'
							handleFav={handleFav}
						/>
					) : (
						''
					)}
				</div>
			</div>
		)
	);
};

export default Movie;
