import axios from 'axios';

export default class beerService{
  constructor(){
    this.service=axios.create({
      baseURL:"https://ironbeer-api.herokuapp.com/beers"
    });
  }

    getBeers= () =>{
      return this.service.get('/all')
      .then(data=>data.data)
    }  

}