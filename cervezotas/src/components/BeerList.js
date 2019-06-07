import React, {Component} from 'react'
import beerService from '../service/beerService'
import BeerCard from './BeerCard'
import {Link} from 'react-router-dom'

class BeerList extends Component{
    constructor(){
        super()
        this.state = { beers: [] }
        this.services = new beerService()
    }


    componentDidMount() {

        this.services.getAllBeers()
            .then(theBeers => this.setState({ beers: theBeers }))
    }
    



    render(){
        return(
            <div>
                <Link to='/'>Volver al inicio</Link>

                <h1>Here are the beers</h1>
               <div className='container'> 
               <div className='row'>
                {this.state.beers.map((beer,idx)=> <BeerCard key={idx} {...beer}/>)}
                </div>
                </div>
            </div>
        )
    }
}

export default BeerList 