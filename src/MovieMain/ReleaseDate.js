import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ReleaseDate = (props) => {
return (
    <span className="badge badge-pill badge-primary">{props.releaseDate}</span>
    )
}

export default ReleaseDate;