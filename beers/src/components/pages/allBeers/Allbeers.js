import React, { Component} from 'react'
// import { Link } from 'react-router-dom'

import BeerCard from './BeerCard'

import HomeButton from '../../tools/HomeButton'

import beersService from '../../../service/beers.service'

class Allbeers extends Component {
    constructor() {
        super()
        this.state = {
            beers: []
        }
        this.beerService = new beersService()
    }

    componentDidMount = () =>{
        this.beerService
            .getAllBeers()
            .then(response => this.setState({beers : response.data}))
            .catch(err => console.log('Error:', err))
    }

    render(){
        return (
            <>
            <HomeButton/>
            <div className='card-columns'>
                {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
            </div>
            
            
             
         </>
         )
    }

    
}

export default Allbeers