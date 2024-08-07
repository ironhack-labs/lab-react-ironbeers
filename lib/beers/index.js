import axios from "axios";

//Read of the beers
export const getAllBeers = async () => {
  try {
    const beers = await axios.get(`${import.meta.env.VITE_API_URL}`);
    return beers.data;
  } catch (error) {
    console.log(error);
  }
};

// Random Beer

// Single Beer
export const getSingleBeer = async (id) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// New Beer

export const createNewBeer = async (newBeer) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/new`,
      newBeer
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// Random Beer
