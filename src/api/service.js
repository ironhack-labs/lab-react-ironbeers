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
}

export default new ApiService();