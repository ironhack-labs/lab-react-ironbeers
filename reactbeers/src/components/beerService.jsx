import axios from 'axios';

export default class BeerService{
  constructor(){
    this.service=axios.create({
      baseURL:"https://ironbeer-api.herokuapp.com/beers"
    });
  }
  getBeers= () =>{
    return this.service.get('/all')
    .then(datos=>datos.data)
  }

//   newBeers = beer =>{
//     return this.service.post('/new',{...beer})
//     .then(newBirra=>newBirra)
//   }
  getRandomBeers = () =>{
      return this.service.get('/random')
        .then(datos => datos.data)
  }
}