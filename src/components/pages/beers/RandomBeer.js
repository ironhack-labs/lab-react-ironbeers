import React, { Component } from 'react'
import axios from 'axios'


class RandomBeer extends Component {

    constructor(props) {
        super()
        this.state = {
            beer: {}
        }
    }


    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((res) => {
                this.setState({
                    beer: res.data
                })
            })
        this.randomBeer()
    }


    randomBeer() {
        const numRandom = Math.floor(Math.random() * this.props.beers.length)
        const chosenBeer = this.props.beers[numRandom]
        this.setState({
            beer: chosenBeer
        })
    }


    render() {

        return (
            <>
                <article className="beer-card" >

                    <img className="imageCardBeer" src={this.state.beer && this.state.beer.image_url}></img>
                    <div className="card-description">
                        <h3>{this.state.beer && this.state.beer.name}</h3>
                        <p className="tagline">{this.state.beer && this.state.beer.tagline}</p>
                        <p className="tagline">{this.state.beer && this.state.beer.description}</p>
                        <p className="subtext"><strong>Created by:</strong> {this.state.beer && this.state.beer.contributed_by}</p>
                    </div>
                </article>
            </>
        )
    }
}

export default RandomBeer