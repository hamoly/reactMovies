import React from 'react';
import Movie from './movie';
import ShowMsg from '../msg/showstaticmsg';
import Share from '../share';

const MovieListRenderer = (props) => {
	const {
		error,
		isLoaded,
		movies,
		query,
		handleFav,
		filter,
		display,
		user,
		likedMovieState,
	} = props;
	return error ? (
		<ShowMsg msg='ERROR : Please check your internet connection then reload the page' />
	) : !isLoaded ? (
		<ShowMsg msg='Please wait while fetching movies ...' />
	) : movies.length > 0 ? (
		display === 'liked' ? (
			<div>
				<Share likedListId={user.uid} />{' '}
				<Movie
					likedMovieState={likedMovieState}
					movie={movies}
					filter={filter}
					display={display}
					user={user}
					handleFav={handleFav}
					query={query}
				/>
			</div>
		) : (
			<Movie
				likedMovieState={likedMovieState}
				movie={movies}
				filter={filter}
				display={display}
				user={user}
				handleFav={handleFav}
				query={query}
			/>
		)
	) : (
		<ShowMsg msg='Sorry there are no movies in this list ...' />
	);
};

export default MovieListRenderer;
