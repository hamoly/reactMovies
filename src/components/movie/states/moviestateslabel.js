import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MovieStatesLabel = (props) => {
    const {inner, icon} = props
return (
    <span className='badge badge-danger p-2 m-2'>
    <FontAwesomeIcon icon={icon} className="mr-2"/>
    {inner}
    </span>
    )
}

export default MovieStatesLabel;