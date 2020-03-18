import React from "react";
import axios from "axios";
import _ from "lodash";

const axiosInstance = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers"
});

export const getBeers = async () => {
  const { data } = await axiosInstance.get("/");

  const listBeers = data.map(e =>
    _.pick(e, [name, image_url, tagline, contributed_by])
  );

  return listBeers;
};
