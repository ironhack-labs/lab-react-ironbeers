const BASE_URL = 'https://ironbeer-api.herokuapp.com/beers/'

export const getData = (endPoint) => {
    const url = `${BASE_URL}${endPoint}`;
    console.log(`Requesting beers ${endPoint}`);
    return fetch(url).then( res => res.json()).then(data => {
        return data;
    })
}