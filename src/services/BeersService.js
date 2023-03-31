import http from "./BaseService";

export const listBeers = () => http.get("/beers");

export const getBeerDetail = (beerId) => http.get(`/beers/${beerId}`);

export const getBeerRandom = () => http.get("/beers/random");

export const newBeer = ({
  name,
  tagline,
  description,
  first_brewed,
  brewers_tips,
  attenuation_level,
  contributed_by,
}) =>
  http.post("/beers/new", {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by,
  });
