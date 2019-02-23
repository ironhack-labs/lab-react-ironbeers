import axios from 'axios';

export default class getBeers{
  constructor(){
    this.service=axios.create({
      baseURL:"https://ironbeer-api.herokuapp.com/beers"
    });
  }
  getRandomBeer= () =>{

     return this.service.get('/random')
    .then(data=> data.data)
    .catch(err=>console.log(err))
  }

  
}