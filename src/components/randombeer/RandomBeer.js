import React, { Component } from 'react';
import axios from 'axios';
import Header from '../header/Header';

export default class RandomBeer extends Component {
    state = {
        image: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: Number(),
        description: '',
        contributed_by: '',
    }

    fetchRandomBeerFromAPI = () => {
        return axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    }

    getRandomBeer = () => {
        this.fetchRandomBeerFromAPI
        .then(randomBeerFromAPI => {
            this.setState({
                image: randomBeerFromAPI.data.image_url,
                name: randomBeerFromAPI.data.name,
                tagline: randomBeerFromAPI.data.tagline,
                first_brewed: randomBeerFromAPI.data.first_brewed,
                attenuation_level: randomBeerFromAPI.data.attenuation_level,
                description: randomBeerFromAPI.data.description,
                contributed_by: randomBeerFromAPI.data.contributed_by,
            })
        })
    }

    componentDidMount(){
        this.getRandomBeer();
    }

    render() {
        const { 
            image, 
            name, 
            tagline, 
            first_brewed, 
            attenuation_level, 
            description, 
            contributed_by, 
        } = this.state;
        return (
            <div>
                <Header />
                <div className="random-beer-details-page">
                    <img 
                    src={image} 
                    alt='icon' 
                    className='random-beer-detail-image'
                    />
                    <br/>
                    <h1>{name}</h1>
                    <h1>{attenuation_level}</h1>
                    <h2>{tagline}</h2>
                    <h3>{first_brewed}</h3>
                    <p>{description}</p>
                    <br/>
                    <p>
                        {contributed_by}
                    </p>
                    
                </div>
            </div>
        )
    }
}
