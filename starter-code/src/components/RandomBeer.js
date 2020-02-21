import React, { Component } from 'react'
import { getBeer, getAllBeers } from '../services/ihBeers'

export default class BeerId extends Component {

    state={
        beerR:{}
    }

async componentDidMount(){
    const  allData = await getAllBeers()
    
    const elementToSearch= Math.floor(Math.random() * (allData.length + 1));
    
this.setState({
    beerR:allData[elementToSearch]
})

}

    
    render() {
        return (
            <div className="BeerDetail">
               <img src={this.state.beerR.image_url} />
               <h2>{this.state.beerR.name}</h2>
               <h2>{this.state.beerR.atenuation_level}</h2>
               <h3>{this.state.beerR.tagline}</h3> 
               <h3>{this.state.beerR.first_brewed}</h3>
               <p>{this.state.beerR.description}</p>
               <h4>{this.state.beerR.contributed_by}</h4>

              
            </div>
        )
        }
}
