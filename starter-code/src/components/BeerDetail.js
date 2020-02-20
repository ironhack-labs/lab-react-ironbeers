import React, { Component } from 'react'
import {getBeer} from "../services/Beers"
export default class BeerDetail extends Component {
    state={
        beer:{}
    }
    async componentDidMount(){
        const data= await getBeer(this.props.beerId)
        this.setState({beer:{...data}})
    }
    render() {
        return (
            <div>
                <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                <h2>{this.state.beer.name}</h2><p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.tagline}</p><p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.description}</p>
                <small>{this.state.beer.contributed_by}</small>
            </div>
        )
    }
}

