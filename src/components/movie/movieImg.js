import React from 'react';

const MovieImg = ({movieImagePath}) => {
    const link = "https://image.tmdb.org/t/p/w440_and_h660_face";
    const imgStyle = {
        width: '100%',
    }
    return (
    <div className="col-lg-3 col-sm-12 col-md-12 p-0">
        <img src={`${link}${movieImagePath}`} className="img-fluid" style={imgStyle} alt="Movie Poster" />
    </div>
    )
}

export default MovieImg;