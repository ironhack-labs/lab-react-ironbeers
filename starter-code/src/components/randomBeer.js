import React, { Component } from 'react'
import axios from 'axios'

class RandomBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomBeer:{}
        }
    }

    getRandomBeer = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(responseFromApi => {
            this.setState({
                randomBeer:responseFromApi.data
            })
        })
    }

    componentDidMount() {
        this.getRandomBeer()
    }


    render() {
        const RandomBeer = this.state.randomBeer
        return (
            <div>
                <h1>{RandomBeer.name}</h1>
                    <p>{RandomBeer.tagline}</p>
                    <img style={{height:'150px'}} src={RandomBeer.image_url} alt=''/>
                    <p>First brewed: {RandomBeer.first_brewed}</p>
                    <p>Attenuation level: {RandomBeer.attenuation_level}</p>
                    <h4>{RandomBeer.description}</h4>
                    <span>Contributed by: {RandomBeer.contributed_by}</span> <br/>
            </div>
        )
    }
}


export default RandomBeers 