import React from 'react';

const MovieImg = ({movieImagePath}) => {
    const link = `https://image.tmdb.org/t/p/w440_and_h660_face${movieImagePath}`;
    const imgStyle = {
        width: '100%',
        height: '100%'
    }
    const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
    return (
        
    <div className="col-lg-3 col-sm-12 col-md-12 p-0">
    {movieImagePath ?
            <img src={placeHolder} className="img-fluid" style={imgStyle} alt="Movie poster" />
 : <img src={require("./movie-poster-na.jpg")} className="img-fluid" style={imgStyle} alt="Movie poster not available" />}
    </div>
    )
}

export default MovieImg;