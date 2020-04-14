import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const MovieVoteCount = ({MovieVoteCount}) => {
return (
    <span className="badge badge-danger p-2 m-2">
    <FontAwesomeIcon icon={faStar} className="mr-2"/>
    {`Vote count ${MovieVoteCount}`}
    </span>
    )
}

export default MovieVoteCount;