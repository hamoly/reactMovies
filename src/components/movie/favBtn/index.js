import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const MovieFavBtn = (props) => {
    const {handleFav, id} = props
    return (
    <button className="badge p-2 m-2" id={id} onClick={e => handleFav(e)}>
    <FontAwesomeIcon icon={faHeart} className="mr-2"/>
    Love
    </button>
    )
}

export default MovieFavBtn;