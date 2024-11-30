import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com";

const getAllBeers = (setBeers) => {
	axios
		.get(`${API_URL}/beers`)
		.then((response) => setBeers(response.data))
		.catch((error) => console.log(error));
};
const getSearchBeers = (setBeers,query) => {
	axios
		.get(`${API_URL}/beers/search?q=${query}`)
		.then((response) => setBeers(response.data))
		.catch((error) => console.log(error));
};

const getBeer = (setBeer, beerId) => {
	axios
		.get(`${API_URL}/beers/${beerId}`)
		.then((response) => setBeer(response.data))
		.catch((error) => console.log(error));
};
const getRandomBeer = (setRandomBeer) => {
	axios
		.get(`${API_URL}/beers/random`)
		.then((response) => setRandomBeer(response.data))
		.catch((error) => console.log(error));
};
const addBeer = (newBeer, setMessage, navigate) => {
	axios
		.post(`${API_URL}/beers/new/`, newBeer)
		.then((response) => {
			console.log(response);
			setMessage(response.data.message);
			setTimeout(() => {
				setMessage("");
				navigate("/beers");
			}, 3000);
		})
		.catch((error) => {
			console.log(error);
			setMessage("Something went wrong", error);
			setTimeout(() => {
				setMessage("");
			}, 3000);
		});
};

export { getAllBeers, getSearchBeers, getBeer, getRandomBeer, addBeer };
