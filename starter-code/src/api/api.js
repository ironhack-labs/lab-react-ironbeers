import axios from "axios";

export default class APIHandler {
  constructor(url) {
    this.handler = axios.create({
      baseURL: 'https://ih-beers-api2.herokuapp.com/'
    });
  }

  get(endpoint, params) {
    return this.handler.get(endpoint);
  }

  post(endpoint, payload, params) {
    return this.handler.post(endpoint, payload)
  }
}