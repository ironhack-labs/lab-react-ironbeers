import React, { Component } from 'react';
import Axios from 'axios';
import qs from 'qs';

const axios = Axios.create({
    baseURL: 'https://ih-beers-api.herokuapp.com/auth/',
    withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const signup = (user) => {
    return axios({
        method: "POST",
        url: "signup",
        data: qs.stringify(user) // using qs to put the js object into the right format
    })
    .then((response)=> {        
        setUser(response.data);
    })
}

export const login = (user) => {
    return axios({
        method: "POST",
        url: "login",
        data: qs.stringify(user) // using qs to put the js object into the right format
    })
    .then((response) => {
        getUser(response.data);
    });
};

export const setUser = (user)=> {
    /* 
        keeping the user in localStorage
        localStorage can only save strings
    */
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (user)=> {
    /*
        a function that gets the user out of the localstorage and 
        turns it intor a js object again

        use this function to protect routes, your profile page navbar
        or anywhere else where you need userdata
    */
    return JSON.parse(window.localStorage.getItem("user"));
}