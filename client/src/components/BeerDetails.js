import React, { Component } from 'react'
import NavBar from './NavBar'
import Service from '../service/service.js'




export default class BeerDetails extends Component {

    constructor(props){
        console.log(props)
        super()
        this.state = {
          beer : {}
        }
        this.service = new Service()
        if(props.match.params.id) this.buildBeer(props.match.params.id)
        else this.buildRandomBeer()
    }

    buildRandomBeer = () => {
        this.service.getRandomBeer()
        .then(response=>{
            console.log(response)
            this.setState({
                beer : response
            })
        })
    }

    buildBeer = (id) => {
        this.service.getOneBeer(id)
        .then(response=>{
            console.log(response)
            this.setState({
                beer : response
            })
        })
    }


    render() {
        return (
            
            <div className="beerdetail">
                <img src={this.state.beer.image_url}/>
                <h2>{this.state.beer.name}</h2>
                <h5>{this.state.beer.tagline}</h5>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.description}</p>
            </div>
      
        )
    }
}


