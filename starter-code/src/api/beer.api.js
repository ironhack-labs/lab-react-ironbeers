import React, { createContext, useState } from "react";
import axios from "axios";

export const BeerContext = createContext();
const beerApi = axios.create({ baseURL: "https://ih-beers-api2.herokuapp.com" });

export const BeerContextProvider = ({ children }) => {
  const [beer, setBeer] = useState(false);

  const getBeers = async url => {
    const res = await beerApi.get(url);
    setBeer(res.data);
    return res.data;
  };
  return <BeerContext.Provider value={{ beer, getBeers }}>{children}</BeerContext.Provider>;
};
