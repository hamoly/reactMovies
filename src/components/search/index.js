import React from 'react';

const Search = (props) => {
	const { query, search } = props;
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				className='form-control mt-3 mb-3'
				placeholder='Search for movies ...'
				value={search}
				onChange={(e) => query(e)}
			/>
		</form>
	);
};

export default Search;
