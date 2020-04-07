import React, { Component } from 'react';
import {getUser} from '../utils/auth';

class Profile extends Component {

    render() {
        let user = getUser();
        return (
            <div>
                <h1>Welcome {user.firstname} {user.lastname}</h1>
                <p>Email: {user.email}</p>
            </div>
        )
    }
}

export default Profile;
