import React from 'react';
import DefaultLayout from "../layout/Default";
import {getUser} from "../utilities/auth";

const Profile = () => {
    let user = getUser();
    return (
        <DefaultLayout>
            <h1>Welcome to your profile page {user.username}</h1>
        </DefaultLayout>
    );
}

export default Profile;