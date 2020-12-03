import React, { Component } from 'react'
import BeersService from '../../../service/beers.service'
import Header from "../Header"

class RandomBeer extends Component {

    constructor() {
        super()
        this.state = {
            beer: []
        }
        this.beersService = new BeersService()
    }

    componentDidMount = () => {    

        this.beersService
            .getBeerRandom()
            .then(res => this.setState({ beer: res.data }))
            .catch(err => console.log(err))
    }  

    render() {
        return (
            
            <>
                <Header/>

                <div className="beer-list">
                    
                            <div className="card" key={this.state.beer._id}>
                                <img className="card-img-top" src={this.state.beer.image_url} alt=""/>
                                <div className="card-body">
                                    <h2 className="card-title">{this.state.beer.name}</h2>
                                    <h4 className="card-text mt-3">{this.state.beer.tagline}</h4> 
                                    <p className="card-text mt-3">Created by: {this.state.beer.first_brewed}</p>  
                                    <p className="card-text mt-3">Created by: {this.state.beer.attenuation_level}</p>  
                                    <p className="card-text mt-3">Created by: {this.state.beer.description}</p>  
                                    <p className="card-text mt-3">Created by: {this.state.beer.contributed_by}</p>  
                                </div>
                            </div>  
        
                </div>  
            </>          

        )
    }
}

export default RandomBeer