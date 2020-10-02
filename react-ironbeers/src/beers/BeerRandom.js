import React, { Component, Fragment } from 'react'
import NavBar from '../header/NavBar'
import beerService from '../beers/service/beers.service'
import BeerSingleCard from './BeerSingleCard'
import 'bootstrap/dist/css/bootstrap.css';

export default class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            allBeers: []
        }
        this.beerService = new beerService()
    }

    componentDidMount = () => this.loadBeer()

    loadBeer = () => {
        this.beerService
            .getAllBeers()
            .then(data => {
                this.setState({ allBeers: data.data })
            }).then(data => this.state.allBeers[0])
            .catch(err => console.log('err: ', err))
    }
    randomBeer() {
        const numRandom = Math.floor(Math.random() * this.state.allBeers.length)
        const chosenBeer = this.state.AllBeers[0]
        this.setState({
            AllBeers: chosenBeer
        })
    }

    render() {

        console.log(this.state)
        return (
            <Fragment>
                <article className="beer-card" >

                    <div className="card-description">
                        <h3>{this.state.allBeers && this.state.allBeers.name}</h3>
                        <p className="tagline">{this.state.beer && this.state.beer.description}</p>
                        <p className="subtext"><strong>Created by:</strong> {this.state.beer && this.state.beer.contributed_by}</p>
                    </div>
                </article>
            </Fragment>
        )
    }
}
