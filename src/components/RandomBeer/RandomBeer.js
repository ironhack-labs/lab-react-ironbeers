import React, { Component } from 'react'

import Header from './../Header/Header'

import './../../App.css'

class RandomBeer extends Component {
    state = {
        randomBeer: {}
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.setState({ randomBeer: data });
            })
            .catch((err) => console.log(err));
    }

    render() {
        const { randomBeer } = this.state;
        console.log('lalala')

        return (
            <div>
            <Header />
            <div className="container">
                <img id="beersImg" src={ randomBeer.image_url } alt="beerImage" />
                <h1>{ randomBeer.name }</h1>
                <p>{ randomBeer.tagline }</p>
                <p>{ randomBeer.first_brewed }</p>
                <p>{ randomBeer.attenuation_level }</p>
                <p>{ randomBeer.description }</p>
                <p>{ randomBeer.contributed_by }</p>
            </div>
        </div>
        )
    }
}

export default RandomBeer;
