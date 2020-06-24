import React from 'react';

const UserStateMsg = (props) => {
    const {userStateClass, userStateMsg} = props
    
return (
    <div className={`userState ${userStateClass}`}>{userStateMsg}</div>
    )
    
}

export default UserStateMsg;