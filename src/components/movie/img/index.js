import React from "react"
import poster from './movie-poster-na.6fafb80a.jpg';

export default props => { return <img src={poster} id={props.src} alt={props.title} style={{height: "440px"}}/> }
