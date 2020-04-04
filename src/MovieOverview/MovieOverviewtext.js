import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const MovieOverviewtext = (props) => {
return (
    <p className="text-justify text-secondary">
    {props.OverviewText}
    </p>
    )
}

export default MovieOverviewtext;