import axios from 'axios';

export default class BeerService{
constructor(){
    this.service = axios.create({
    baseURL:"https://ironbeer-api.herokuapp.com/beers"
    });
}
getBeer= () =>{
    return this.service.get("/all")
    .then(data =>data.data) 
}
oneBeer = ()=>{
    return this.service.get('/:id')
    .then(data =>data.data)
}

 newBeer = beer =>{
    return this.service.post('/new',{...beer})
     .then(newBeer=>newBeer)
 }
}