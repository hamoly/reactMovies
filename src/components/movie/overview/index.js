import React from 'react';
import MovieOverviewtext from './movieoverviewtext';
import MovieOverviewtitle from './movieoverviewtitle';

const MovieOverview = ({ movieOverviewText }) => {
	return (
		<>
			<MovieOverviewtitle OverviewTitle='Overview' />
			<MovieOverviewtext OverviewText={movieOverviewText} />
		</>
	);
};

export default MovieOverview;
