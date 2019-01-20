const BASE_URL = 'https://ironbeer-api.herokuapp.com/beers/new'

export const postData = (data) => {
    const url = `${BASE_URL}`;
    console.log(`Posting beer...`);
    
    return fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(response => { return response})
      .catch(error => {return  error})
}



