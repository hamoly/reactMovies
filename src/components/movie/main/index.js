import React from 'react';
import Movietitle from './movietitle';
import ReleaseDate from './releasedate';

const MovieMain = ({ movieTitle, movieReleaseDate }) => {
	return (
		<>
			<h2>
				<hr />
				<Movietitle movietitle={movieTitle} />
				<ReleaseDate releaseDate={movieReleaseDate} />
			</h2>
			<hr />
		</>
	);
};

export default MovieMain;
