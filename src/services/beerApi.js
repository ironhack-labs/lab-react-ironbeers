import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

export const getAllBeers = async () => {
	console.log("Making API request")
	const response = await axios.get(`${API_URL}`);

	if (!response.status === 200) throw new Error("Failed to fetch Beers.");

	return response.data;
};

export const getBeer = async ({ queryKey }) => {
  const [_, id] = queryKey;
  const response = await axios.get(`${API_URL}/${id}`);
  
	if (!response.status === 200) throw new Error("Failed to fetch Beers.");

	return response.data;
};

export const getRandomBeer = async () => {
  const beers = await getAllBeers();
  const randomInt = Math.floor(Math.random() * beers.length)

	return beers[randomInt];
};


export const postBeer = async () => {
	const response = await axios.post(`${API_URL}`);

	if (!response.status === 200) throw new Error("Failed to fetch Beers.");

	return response.data;
};