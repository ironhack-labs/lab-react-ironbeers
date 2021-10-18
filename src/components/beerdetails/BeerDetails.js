import React, { Component } from 'react';
import './BeerDetails.css';
import BEER_SERVICE from '../../services/BeerService';
import Header from '../header/Header';
import axios from 'axios';

export default class BeerDetails extends Component {
    state = {
        image: '',
        name: '',
        tagline: '',
        first_brewed: '',
        attenuation_level: Number(),
        description: '',
        contributed_by: '',
    }

    fetchBeerFromAPI = () => {
        return axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
    }

    getBeer = () => {
        this.fetchBeerFromAPI()
        .then(beerFromAPI => {
            // console.log(beerFromAPI)
            this.setState({
                image: beerFromAPI.data.image_url,
                name: beerFromAPI.data.name,
                tagline: beerFromAPI.data.tagline,
                first_brewed: beerFromAPI.data.first_brewed,
                attenuation_level: beerFromAPI.data.attenuation_level,
                description: beerFromAPI.data.description,
                contributed_by: beerFromAPI.data.contributed_by,
            })
            
        })
    }

    componentDidMount(){
        this.getBeer();
        // console.log(this.state)
    }

    render() {
        const { image, name, tagline, first_brewed, attenuation_level, description, contributed_by } = this.state;
        return (
            <div>
                <Header />
                <div className="beer-details-page">
                    <img 
                    src={image} 
                    alt='icon' 
                    className='beer-detail-image'
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