/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const LoadingContext = React.createContext();

export const isLoading = () => {
  const loadingState = useContext(LoadingContext);
  return loadingState.loading;
};

export const doneLoading = () => {
  const loadingState = useContext(LoadingContext);
  loadingState.setLoading(false);
  return loadingState.loading;
};

export const startLoading = () => {
  const loadingState = useContext(LoadingContext);
  loadingState.setLoading(true);
  return loadingState.loading;
};

export const addBeer = async (
  name,
  tagline,
  description,
  first_brewed,
  brewers_tips,
  attenuation_level,
  contributed_by
) => {
  //console.log("add Beer");
  const res = await api.post("/beers/new", {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by
  });
  //console.log(res.data);
  return res.data;
};

export const searchBeer = async q => {
  const res = await api.get(`/beers/search?q=${q}`);
  return res.data;
};
