import axios from "axios";
import _ from "lodash";

const axiosInstance = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers"
});

export const getBeers = async () => {
  const { data } = await axiosInstance.get("/");

  console.log(data);

  const listBeers = data.map(e =>
    _.pick(e, [name, image_url, tagline, contributed_by])
  );

  console.log(listBeers);

  return listBeers;
};
