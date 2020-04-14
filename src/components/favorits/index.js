import React from 'react';

const Favorits = (props) => {
    if(props.fav > 0) {
                return (
                    
            props.fav.map(fav => 
                {
                    return (
                        <>
                        <li className="list-group-item bg-danger">Loved Movies</li>
                        <li className="list-group-item">{fav}</li>
                        </>
                    )
                })
                )
    } else {
        return (
        <>
        <li className="list-group-item bg-danger">Loved Movies</li>
        <li className="list-group-item">No Loved Movies</li>
        </>
        )
    }
}

export default Favorits;