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

  getAllBeer = ()=>{
    return this.service.get('/all')
    .then(data=> data.data)
    .catch(err=>console.log(err))
  }
  

  newBeer = (nuevaCerveza)=>{
    
    return this.service.post('/new',nuevaCerveza)
    .then(data=> console.log(data))
    .catch(err=>console.log(err))
  }

  
}