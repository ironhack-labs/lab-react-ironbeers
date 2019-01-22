const BASE_URL = "https://ironbeer-api.herokuapp.com/beers/"

export const getBeer = (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  return fetch(url).then( res => res.json()).then(data => {
    return data;
})
};