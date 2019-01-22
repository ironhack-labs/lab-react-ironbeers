const BASE_URL = 'https://ironbeer-api.herokuapp.com/beers/new'

 export const postBeer = (data) => {
    const url = `${BASE_URL}`;

     return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => { return response})
      .catch(error => {return  error})
};