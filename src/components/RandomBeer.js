import React from 'react';
import axios from 'axios';
import Header from './Header';

class BeerDetails extends React.Component {

    state = {
        beer: null
    }

    getRandomBeer = () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => {
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getRandomBeer();
    }
    render() {
        if (!this.state.beer) return <h1>Loading ...</h1>;
        return (
            <div>
                <Header />
                    <img src={this.state.beer.image_url} alt={this.state.beer.name}/>
                    <h2>{this.state.beer.name}</h2>
                    <p>{this.state.beer.tagline}</p>
                    <p>{this.state.beer.first_brewed}</p>
                    <p>{this.state.beer.attenuation_level}</p>
                    <p>{this.state.beer.description}</p>
                    <p>{this.state.beer.contributed_by}</p>
            </div>
        )
    }
}

export default BeerDetails;