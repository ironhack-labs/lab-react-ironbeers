import React, { Component } from 'react'
import { getBeer } from '../services/ihBeers'

export default class BeerId extends Component {

    state={
        beerD:{}
    }

async componentDidMount(){
    const  data  = this.props.match.params.beerId
    const  beerDetail = await getBeer(data)
    
this.setState({
    beerD:beerDetail
})
}

    
    render() {
        return (
            <div className="BeerDetail">
               <img src={this.state.beerD.image_url} />
               <h2>{this.state.beerD.name}</h2>
               <h2>{this.state.beerD.atenuation_level}</h2>
               <h3>{this.state.beerD.tagline}</h3> 
               <h3>{this.state.beerD.first_brewed}</h3>
               <p>{this.state.beerD.description}</p>
               <h4>{this.state.beerD.contributed_by}</h4>

               
            </div>
        )
    }
}
