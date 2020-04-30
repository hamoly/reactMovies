import React from 'react';

const Search = (props) => {
  const {query} = props
return (
    <form onSubmit={e => e.preventDefault()}>
    <input
      className="form-control mt-3 mb-3"
      placeholder="Search for movies ..."
      onChange={query}
    />
  </form>
    )
}

export default Search;