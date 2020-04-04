import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ShowMsg = (props) => {
    return (
        <p className="text-warning mt-5 text-center">
            {props.msg}
        </p>
    )
}

export default ShowMsg;