import React from 'react';

const Search = ({movieOverviewText}) => {
return (
    <form className="form-group">
        <input
        className="form-control"
        placeholder="Search for..."
        ref={input => this.search = input}
        />
        <p>{this.state.query}</p>
    </form>
    )
}

export default Search;