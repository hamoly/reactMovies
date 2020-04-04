import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const MovieImg = (props) => {
    const link = "https://image.tmdb.org/t/p/w440_and_h660_face";
    const imgStyle = {
        width: '100%',
    }
    return (
    <div className="col-lg-3 col-sm-12 col-md-12 p-0">
        <img src={link + props.movieImagePath} className="img-fluid" style={imgStyle} alt="Movie Poster" />
    </div>
    )
}

export default MovieImg;