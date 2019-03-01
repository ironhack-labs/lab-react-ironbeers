import React, { Component } from 'react'
import Navbar from './NavBar'
import axios from 'axios'

export default class BeerDetail extends Component {

    state = {
        theBeer: [],
        isLoading: true
    }

    getBeer = () => {
        console.log(this.props.match.params.beerid)
        let beerId = this.props.match.params.beerid
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${beerId}`)
            .then(beerArray => {
                this.setState({
                    theBeer: beerArray.data,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.getBeer()
    }
 
    render() {
        if (this.state.isLoading) {
            return (
                <div>Loading..... </div>
            )
        }
        console.log(this.state.theBeer)
        return (
            <div>
                <Navbar />
                <div key={this.state.theBeer._id}>
                    <img src={this.state.theBeer.image_url} alt={this.state.theBeer.name} height="300px" />
                    <div className="card-body">
                        <h2>{this.state.theBeer.name}</h2>
                        <h3>{this.state.theBeer.tagline}</h3>
                        <h4>{this.state.theBeer.first_brewed}</h4>
                        <h4>{this.state.theBeer.attenuation_level}</h4>
                        <p>{this.state.theBeer.description}</p>
                        <p>Created by: {this.state.theBeer.contributed_by}</p>
                    </div>
                </div>
            </div>
        )
    }
}