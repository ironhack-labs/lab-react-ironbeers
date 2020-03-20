import React from "react";
import axios from "axios";
import { IdBeer } from "../src/pages/IdBeer.page";

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

export const randomBeer = async () => {
  const response = await api.get(`/beers/random`);
  return response.data;
};

export const newBeer = async info => {
  const response = await api.post(`/beers/new`, info);
  return response.data;
};
