import axios from "axios";


//  make a GET request to the Beers API endpoint https://ih-beers-api2.herokuapp.com/beers using axios
// | `GET`  | `/`                 | [beers]                                                | Get all the beers from the 

export const getBeersFromBeersAPI = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        //console.log(error);
    }
};