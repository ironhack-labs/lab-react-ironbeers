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
            <div id="beer">
                <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                <div className="row">
                <h2>{this.state.beer.name}</h2><h2 className="gray">{this.state.beer.attenuation_level}</h2>
                </div>
                <div className="row">
                <h3 className="gray">{this.state.beer.tagline}</h3><p>{this.state.beer.first_brewed}</p>
                </div>
                <div className="row">
                <p>{this.state.beer.description}</p>
                </div>
                <small className="gray">{this.state.beer.contributed_by}</small>
            </div>
        )
    }
}

