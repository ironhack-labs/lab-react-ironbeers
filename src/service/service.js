import axios from 'axios';

const url = 'https://ih-beers-api2.herokuapp.com/beers';
// const message = { message: 'New beer successfully saved to database!' };

async function getBeers() {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log('there is an error fetching the beers', error);
  }
}

async function getOneBeer(id) {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    return data;
  } catch (error) {
    console.log('there is an error fetching the beers', error);
  }
}

async function getRandomBeer() {
  try {
    const { data } = await axios.get(`${url}/random`);
    return data;
  } catch (error) {
    console.log('there is an error fetching the beers', error);
  }
}

async function searchBeer(query) {
  try {
    const { data } = await axios.get(`${url}/q=${query}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log('there is an error fetching the beers', error);
  }
}

async function newBeer() {
  try {
    const { data } = await axios.post(`${url}/new`, {});
    console.log(data);
    return data;
  } catch (error) {
    console.log('there is an error fetching the beers', error);
  }
}

export { getBeers, getOneBeer, getRandomBeer, searchBeer, newBeer };
