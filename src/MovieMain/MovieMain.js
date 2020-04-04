import React from 'react';
import Movietitle from './Movietitle';
import ReleaseDate from './ReleaseDate';
import 'bootstrap/dist/css/bootstrap.css';

const MovieMain = (props) => {
return (
    <>
    <h2>
    <hr />
    <Movietitle movietitle={props.movieTitle} />
    <ReleaseDate releaseDate={props.movieReleaseDate} />
    </h2>
    <hr />
    </>
    )
}

export default MovieMain;