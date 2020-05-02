import React from 'react';

const MovieFavBtn = (props) => {
    const {handleFav, id} = props
    return (
    <button className="btn p-2 m-2 btn-secondary add" id={id} onClick={e => handleFav(e)}>
     Like
    </button>
    )
}

export default MovieFavBtn;