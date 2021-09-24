import React, { Component } from 'react'
import BeerService from '../../services/beer.services'

export default class BeerDetail extends Component {

    constructor(){
        super();
    
        this.state = {
          beer: null
        }
    
        this.beerService = new BeerService();
      }

      componentDidMount() {
        const { id } = this.props.match.params;
        this.beerService.getOneBeer(id)
        .then(res => {
        this.setState({
            ...this.state,
            beer: res.data
        })
    })
    .catch(err => console.error(err))

  }


    render() {
        return (
            this.state.beer ?
            <div>
                <h2>{this.state.beer.name}</h2>
                <hr/>
                <img src={this.state.beer.image_url} alt={this.state.beer.name} />
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p><small>{this.state.beer.contributed_by}</small></p>
            </div>
            :
            <p>Loading...</p>
        )
    }
}
