import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'
export default class RandomBeer extends Component {
    state = {
        data:null
    }
   
    getBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => this.setState({data:response.data}))
    }

    componentDidMount () {
        this.getBeer()
    }
    render() {
        if(!this.state.data) return <p>Loading...</p>
        return (
            <div>
                 <Header />
                 <img src = {this.state.data.image_url} />
                    <h3>{this.state.data.name}</h3>
                    <p>{this.state.data.tagline}</p>
                    <p>{this.state.data.first_brewed}</p>
                    <p>{this.state.data.attenuation_level}</p>
                    <p>{this.state.data.description}</p>
                    <p>{this.state.data.contributed_by}</p>
            </div>
        )
    }
}
