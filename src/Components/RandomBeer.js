import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../Components/NavBar'



export default class RandomBeer extends Component {

    state = {
        randomBeer: []
    }

    componentDidMount(){

        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            this.setState({
                randomBeer: response.data
            })
        })
        .catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <div> 
                <NavBar />
                <img src={this.state.randomBeer.image_url} alt='beer' style={{
                    width:'150px',
                    margin:'15px'
                }} />
                <h1>{this.state.randomBeer.name}</h1> 
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.first_brewed}</p>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.attenuation_level}</p>
                <p>Contributed by: {this.state.randomBeer.contributed_by}</p>
            </div>
        )
    }
}
