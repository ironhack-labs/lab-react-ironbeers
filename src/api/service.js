import axios from 'axios';

class ApiService {
  constructor() {
    this.api = axios.create();
  }

  listBeers = async () => {
    try {
      const { data } = await this.api.get('https://ih-beers-api2.herokuapp.com/beers');
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  getBeer = async (id) => {
    try {
      const { data } = await this.api.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  getRandomBeer = async () => {
    try {
      const { data } = await this.api.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  createBeer = async (beer) => {
    try {
      await this.api.post(`https://ih-beers-api2.herokuapp.com/beers/new`, beer);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ApiService();