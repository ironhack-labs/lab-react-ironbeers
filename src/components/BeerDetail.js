import React, { Component } from 'react';
import Navbar from './Navbar';
const axios = require('axios');

class BeerDetail extends Component {
    state = {
        beer: {}
    }

    componentDidMount = () => {
        console.log(this.props)
        const urlPath = this.props.match.params.id ? `${this.props.match.params.id}` : 'random';
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${urlPath}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { name, image_url, tagline, description, first_brewed, attenuation_level, contributed_by } = this.state.beer;

        return (
            <div>
                <Navbar/>
                <div className="container">
                    <img src={image_url} alt='beer' />
                    <h3><span>{name}</span> <span>{attenuation_level}</span></h3>
                    <h5><span>{tagline}</span> <span>{first_brewed}</span></h5>
                    <p>{description}</p>
                    <br />
                    <p>{contributed_by}</p>
                </div>
            </div>
        )
    }    
}

export default BeerDetail;
