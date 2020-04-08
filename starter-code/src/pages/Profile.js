import React from 'react'
import {getUser} from "../utils/auth";
import Navbar from '../components/Navbar'

const Profile = () => {
    let user = getUser();
    return (
        <div>
            <Navbar />
            <h1>Welcome to your profile page {user.username}</h1>
        </div>
    );
}

export default Profile;