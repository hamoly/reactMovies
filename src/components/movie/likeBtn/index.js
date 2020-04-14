import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'

const MovieFavBtn = (props) => {
    const {handleFav, id} = props
    return (
    <button className="badge p-2 m-2" id={id} onClick={e => handleFav(e)} value="Like">
    <FontAwesomeIcon icon={faFireAlt} className="mr-2"/>
    </button>
    )
}

export default MovieFavBtn;