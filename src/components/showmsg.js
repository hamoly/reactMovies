import React from 'react';

const ShowMsg = ({msg}) => {
    
    return (
        <p className="text-warning mt-5 text-center">
            {msg}
        </p>
    )
}

export default ShowMsg;