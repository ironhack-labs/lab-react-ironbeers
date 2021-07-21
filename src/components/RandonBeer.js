import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'


 class RandonBeer extends Component {

    state = {
        randomBeer: null
    }

    async componentDidMount(){
        let response = axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        console.log(response)
        this.setState({
            randomBeer: response.data
        })

    }

    render() {

        if(!this.state.randomBeer){
            return 'Loading random beer....'
        }

        let {  randomBeer } = this.state

        return (
            <div>
             
             <Header />

                <img src={randomBeer.image_url} alt='' />

                <h1>{randomBeer.name}</h1>
                <h2>{randomBeer.tagline}</h2>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <h3>{randomBeer.contributed_by}</h3>

              
             
                
            </div>
        )
    }
}

export default RandonBeer