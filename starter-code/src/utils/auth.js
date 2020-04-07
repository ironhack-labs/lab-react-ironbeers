import Axios from "axios";
import qs from "qs";

const axios = Axios.create({
    baseURL: 'https://ih-beers-api.herokuapp.com/auth/',
    withCredentials: true,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });

  export const signup = (user)=>{
    // debugger
    return axios({
        method: "POST",
        url: "signup",
        data: qs.stringify(user)
    })
    .then((response)=> {
        setUser(response.data);
    })
}

export const login = (user) => {
    // debugger
    return axios({
        method: "POST",
        url: "login",
        data: qs.stringify(user)
    })
    .then((response)=>{
        setUser(response.data);
        // return "something";   // if I wanted to get something out of this to the component
    })
}

export const logout = ()=> {
    // debugger
    return axios({
        method: "GET",
        url: "logout",    
    })
    .then((response)=>{
        window.localStorage.removeItem("user");
        return (response)
    })
}

export const setUser = (user)=> {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = ()=> {
    return JSON.parse(window.localStorage.getItem("user"));
}