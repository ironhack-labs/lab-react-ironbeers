import React, { useState, createContext } from "react";
import axios from "axios";

const beerApi = axios.create({ baseURL: "https://ih-beers-api2.herokuapp.com" });
export const FormContext = createContext();

export const getBeers = async url => {
  console.log(url);
  const res = await beerApi.get(url);
  return res.data;
};

export const addBeer = async beer => {
  console.log("ADD BEER API");
  const res = await beerApi.post("/beers/new", beer);
  return res.data;
};

export const initialState = { name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: "" };

export const FormContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  console.log("PROVIDER STATE", state);
  const handleChange = e => {
    console.log(e);
    const id = e.target.id;
    const value = e.target.value;
    setState({ ...state, [id]: value });
  };

  return <FormContext.Provider value={{ state, setState, handleChange }}>{children}</FormContext.Provider>;
};
