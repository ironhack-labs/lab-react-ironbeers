
import React from 'react';
import DefaultLayout from "../layout/Default";
import {getUser} from "../utils/auth";
import './Profile.css'

const Profile = () => {
    let user = getUser();
    return (
        <DefaultLayout>
          <div className="profile">
            <h3>Welcome to your profile page {user.username}</h3>
            <img src="https://media.giphy.com/media/3o7TKKdv1vyUpyFLva/giphy.gif" alt="beer"/>
          </div>
        </DefaultLayout>
    );
}

export default Profile;