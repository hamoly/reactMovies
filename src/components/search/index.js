import React from 'react';

const Search = ({searchInput, callBack}) => {
return (
      <form onSubmit={e => e.preventDefault()}>
      <input
        className="form-control mt-3 mb-3"
        placeholder="Search for movies ..."
        value={searchInput}
        onChange={callBack}
      />
    </form>
    )
}

export default Search;