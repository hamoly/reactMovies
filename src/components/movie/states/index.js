import React from 'react';
import MovieStatesLabel from './moviestateslabel';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const MovieStates = ({MoviePopularityVal, MovieVoteCountVal}) => {
return (
    <>
    <MovieStatesLabel
    icon={faFireAlt}
    inner={`Popularity ${MoviePopularityVal}`}/>

    <MovieStatesLabel
    icon={faStar}
    inner={`Vote Count ${MovieVoteCountVal}`}/>
    </>
    )
}

export default MovieStates;