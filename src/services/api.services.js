import axios from 'axios';
import { Component } from 'react';

class APIService extends Component {
  constructor() {
    super();
    this.service = axios.create();
  }

  async listAllBeers() {
    try {
      const { data } = await this.service.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      return data;
    } catch (error) {
      console.log('Error in GET /beers ===> ', error);
    }
  }

  async getOneBeer(beerId) {
    try {
      const { data } = await this.service.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      return data;
    } catch (error) {
      console.log(`Error in GET /beers/${beerId} ===> `, error);
    }
  }
}

export default new APIService();
