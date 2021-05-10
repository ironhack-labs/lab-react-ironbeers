import React, { Component } from 'react';
import axios from 'axios';

export default class RandomBeer extends Component {
    state = {
        beer: null
    }
    getBeerData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(beer => {
            // console.log(beer.data);
            this.setState({
              beer: beer.data
            })
        })
        .catch(err => console.log(err));
    }
    componentDidMount() {
        this.getBeerData();
    }
    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
          this.getBeerData();
        }
    }
    render() {
        const beer = this.state.beer;
        if (!beer) return <h1>Loading ...</h1>
        return (
            <div className="single-beer" key={beer._id}>
                <img src={beer.image_url} alt="" />
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                {beer.contributed_by && <p><span>Created by: </span>{beer.contributed_by}</p>}
            </div>
        )
    }
}
