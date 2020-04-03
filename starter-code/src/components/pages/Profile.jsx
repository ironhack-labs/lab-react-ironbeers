import React from 'react';
import {getUser} from "../../services/auth";

const Profile = () => {
    
    let user = getUser();
    debugger
    return (
        <div className="is-size-1 has-text-weight-bold has-padding-top-35">
            <h1>Welcome to your profile page {user.username}</h1>
        </div>
    );
}

export default Profile;
