import React, { Component } from 'react'
import axios from 'axios';
import 'bulma/css/bulma.css';
import Header from './Header';
import {Link} from 'react-router-dom';

export default class Random extends Component {
    state = {
        beer: ''
    }

    getRandomBeer = () =>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
        const beer = response.data;
        this.setState({
          beer: beer,
        });
      });
    }

    componentDidMount() {
        this.getRandomBeer();
      }

      componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
          this.getBeerData();
        }
      }

    render() {
        const beer = this.state.beer;
        console.log(beer)
        return (
            <div>
                <div key={beer._id}>
                <h1><Header/></h1>
                <div className='box' style={{width: '50%'}}>
                <h2>{beer.name}</h2>
                <img src={beer.image_url} style={{height: '200px'}} alt='beer'/>
                <p>{beer.tagline}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.contributed_by}</p>
                </div>
                </div>
                <Link to={'/beers'} className='button is-success mt-3'>Back to all Beers</Link>
            </div>
        )
    }
}