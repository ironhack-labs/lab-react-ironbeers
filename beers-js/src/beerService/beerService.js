import axios from 'axios';

export default class BeerService{
  constructor(){
    this.service=axios.create({
      baseURL:"https://ironbeer-api.herokuapp.com/beers"
    });
  }
  getBeer= () =>{
    return this.service.get('/all')
    .then(data=>data.data)
  }

//   newButterfly = butterfly =>{
//     return this.service.post('/new',{...butterfly})
//     .then(newButterfly=>newButterfly)
//   }
}