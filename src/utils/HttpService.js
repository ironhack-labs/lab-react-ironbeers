// Here we have Service class > dont forget that in JS class is Function
import axios from 'axios';

export default class HttpService {
  constructor() {
    this.data = 'Hello data from HttpService';
    this.getData = this.getData.bind(this);
    this.baseUrl = 'https://ih-beers-api2.herokuapp.com/beers';
  }

  getData() {
    // Make a request for a user with a given ID
    axios
      .get(`${this.baseUrl}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
