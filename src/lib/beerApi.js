const BASE_URL = 'https://ironbeer-api.herokuapp.com/beers/';

export const getBeers = (params) => {
  const url = `${BASE_URL}${params}`;
  return fetch(url).then(res => res.json()).then(result => result);
}

export const postBeer = (newBeer) => {
  const url = `${BASE_URL}new`;
  return fetch(url,
    {
      method: 'POST',
      body: JSON.stringify(newBeer),
      headers:{'Content-Type': 'application/json'}
    })
    .then(res => res.json())
      .then(result => result)
      .catch(error => error)
}
