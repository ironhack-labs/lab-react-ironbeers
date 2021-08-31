import axios from "axios";

 class APIHandler {
    constructor(baseUrl) {
      this.BASE_URL = baseUrl;
      this.api = axios.create({ baseURL: baseUrl });
    }
     async getAllBeers() {
      return this.api.get(`/beers`); 
    }
     async getOneBeer(name) {
      return ''
    }
     async getRandomBeer() {
      return ''
    }
     async putANewBeer(newBeer) {
      return ''
    }
  }

  export default APIHandler
  