import React,{Component} from 'react'
import AllBeersService from './service/allBeersService'
import BeerCard from './BeerCard'
//import FormBeer from './FormBeer'
//import RandomBeer from './RandomBeer'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
class ListAllBeers extends Component{

constructor(){
super()

this.state={
  beers:[]

}
this.AllBeersService = new AllBeersService()

}
componentDidMount = () =>  this.beerList()
   
beerList=() => {
    this.AllBeersService
    .getAllBeers()
    .then(response => this.setState({ beers: response.data }))
    .catch(err => console.log(err))
}

render(){
    
return(
<>
<h1>Lista de cervezas</h1>
<hr></hr>
<Link className="btn btn-dark btn-md m-5" to='/random'>Cerveza Random</Link>
<hr></hr>
<Link className="btn btn-dark btn-md m-5" to='/newBeer'>Crear Cerveza</Link>
<Container>
<Row>{this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}</Row>
</Container>
</>
)
}

}

export default ListAllBeers