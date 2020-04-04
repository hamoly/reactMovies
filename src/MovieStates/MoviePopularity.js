import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';

const MoviePopularity = (props) => {
return (
    <span className="badge badge-danger p-2 m-2">
    <FontAwesomeIcon icon={faFireAlt} className="mr-2"/>
    {'Popularity ' + props.MoviePopularity}
    </span>
    )
}

export default MoviePopularity;