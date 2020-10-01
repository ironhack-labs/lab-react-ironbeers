import React, { Component} from 'react'
// import { Link } from 'react-router-dom'

import HomeButton from '../tools/HomeButton'

import beersService from '../../service/beers.service'

class SingleBeer extends Component {
    constructor() {
        super()
        this.state = {
            beer: {}
        }
        this.beerService = new beersService()
    }

    componentDidMount = () =>{
    
        this.beerService
            .getRandomBeer()
            .then(response => this.setState({beer : response.data}))
    
            .catch(err => console.log('Error:', err))
    }

    render(){
        console.log(this.state)
        return (
            <>
            <HomeButton/>
            <div className="card d-flex">
                <img className= "beerListImg" src={this.state.beer.image_url} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{this.state.beer.name}</h4>
                    <small>{this.state.beer.tagline}</small>
                    <p className="card-text">{this.state.beer.description}</p>
                    <div className='dflex'>
                        <small>{this.state.beer.contributed_by}</small>
                        <h3 className='text-muted'>{this.state.beer.attenuation_level}</h3>
                        <small><b>{this.state.beer.first_brewed}</b></small>
                    </div>
                    
                </div>
            </div>
            
            
             
         </>
         )
    }

    
}

export default SingleBeer