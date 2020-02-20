import axios from "axios";
export default class APIHandler {
  constructor(url) {
    this.handler = axios.create({
      baseURL: url || process.env.REACT_APP_SERVER_API_URL
    });
  }

  fetchBeers(endpoint) {
    return this.handler.get(endpoint);
  }

  searchBeers(query) {
    return this.handler.get("/search?q=" + query);
  }

  addBeer(endpoint, payload) {
    return this.handler.post(endpoint, payload);
  }
}
