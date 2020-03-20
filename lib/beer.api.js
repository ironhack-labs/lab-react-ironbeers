import axios from "axios";
import _ from "lodash";

const axiosInstance = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers"
});

export const getBeers = async () => {
  const { data } = await axiosInstance.get("/");
  return data.map(e =>
    _.pick(e, ["_id", "name", "image_url", "tagline", "contributed_by"])
  );
};

export const getBeer = async id => {
  const url = id ? `/${id}` : "/random";
  const { data } = await axiosInstance.get(url);

  return _.pick(data, [
    "_id",
    "name",
    "image_url",
    "tagline",
    "contributed_by",
    "first_brewed",
    "attenuation_level",
    "description"
  ]);
};

export const createBeer = async data => {
  return ({ data } = await axiosInstance.post(`/new`, data));
};

export const searchBeers = async query => {
  return await axiosInstance.get(`/search?q=${query}`);
};
