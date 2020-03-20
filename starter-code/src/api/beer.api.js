import React from "react";
import axios from "axios";

const beerApi = axios.create({ baseURL: "https://ih-beers-api2.herokuapp.com" });

export const getBeers = async url => {
  const res = await beerApi.get(url);
  return res.data;
};
