import React, { Component } from 'react';
import {getUser} from '../utils/auth';
import Nav from '../components/Nav';

class Profile extends Component {

    render() {
        let user = getUser();
        return (
            <div>
                <Nav />
                <h1>Welcome {user.firstname} {user.lastname}</h1>
                <p>Email: {user.email}</p>
            </div>
        )
    }
}

export default Profile;
