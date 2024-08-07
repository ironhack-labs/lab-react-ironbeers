import axios from "axios";

// Get all beers from API
export const getAllBeers = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get a single beer
export const getBeerById = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Create new beer
export const createNewBeer = async (newBeer) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/new`,
      newBeer
    );
  } catch (error) {
    console.log(error);
  }
};

export const getRandomBeer = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/random`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchBeer = async (searchParam) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/search?${searchParam}={query}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
