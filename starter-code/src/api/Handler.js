import axios from "axios";

export default class APIHandler {
  constructor(url) {
    this.handler = axios.create({
      baseURL: url || process.env.REACT_APP_SERVER_API_URL
    });
  }

//   Create an instance of axios

  get(endpoint, params) {
    return this.handler.get(endpoint);
  }
}