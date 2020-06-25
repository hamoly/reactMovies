import React from "react"
import poster from './movie-poster-na.6fafb80a.jpg';

export default props => {
    const imgStyle = {
        height: "100%",
        width: "100%"
      };
    return <img src={poster} id={props.src} alt={props.title} style={imgStyle}/> }
