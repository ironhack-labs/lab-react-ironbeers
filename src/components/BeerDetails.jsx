import React, { Component } from 'react'
import FetchBeers from '../helpers/fetch-beers'

class BeerDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            beer: null
        };
        this.getBeersInfo = new FetchBeers();
    }

    async fetchData() {
        const id = this.props.match.params.id ? this.props.match.params.id : null
        const getBeer = id ? this.getBeersInfo.beerDetails : this.getBeersInfo.randomBeer
        const {data: beer} = id ? await getBeer(id) : await getBeer()
        this.setState({
            beer: beer
        })
    }

    async componentDidMount() {
        this.fetchData()
    }

    render() {
        if (!this.state.beer) {
            return (<img src='https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif' alt="loading gif"/>)
        }
        return (
            <div>
                <img src={this.state.beer.image_url} alt="Beer bottle"/>
                <div>
                    <h1>{this.state.beer.name}</h1>
                    <h1>{this.state.beer.attenuation_level}</h1>
                </div>
                <div>
                    <h3>{this.state.beer.tagline}</h3>
                    <h4>{this.state.beer.first_brewed}</h4>
                </div>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        )
    }
}

export default BeerDetails
