import axios from 'axios';

export const getAllBeer = async () => {
  try {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    const allBeerResponse = response.data;
    return allBeerResponse;
  } catch (error) {
    return error;
  }
};

//NewBeer.js Form
// export const handleInputChange = (event) => {
//   const { value } = event.target;
//   const inputName = event.target.name;
//   this.setState({
//     [inputName]: value,
//   });
// };
