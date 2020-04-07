import Axios from "axios";
import qs from "qs";

const axios = Axios.create({
  baseURL: 'https://ih-beers-api.herokuapp.com/auth/',
  withCredentials: true,
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const signup = (user) => {
  return axios({
    method: "POST",
    url: "signup",
    data: qs.stringify(user)
  })
    .then((response) => {
      setUser(response.data);
    })
}

export const login = (user) => {
  return axios({
    method: "POST",
    url: "login",
    data: qs.stringify(user)
  })
    .then((response) => {
      setUser(response.data);
    })
}

export const logout = () => {
  return axios({
    method: "GET",
    url: "logout",
  })
    .then(() => {
      removeUser();
    })
}

export const setUser = (user) => {
  window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = () => {
  return JSON.parse(window.localStorage.getItem("user"));
}

export const removeUser = () => {
  window.localStorage.removeItem('user')
}