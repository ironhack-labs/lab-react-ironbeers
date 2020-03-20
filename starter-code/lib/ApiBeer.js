import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com"
});

export const listBeer = async () => {
  const response = await api.get(`/beers`);
  return response.data;
};

export const singleBeer = async id => {
  const response = await api.get(`/beers/${id}`);
  return response.data;
};
