import Header from './Header';
import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css';

export default class BeerDetails extends Component {
    state = {
        beer: {}
    }

    getBeerDetails = (id) =>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
          .then((beer) => {
            this.setState({ beer: beer.data });
          })
          .catch((err) => console.log(err));
    }

    componentDidMount() {
        this.getBeerDetails(
          this.props.match ?
            this.props.match.params.id : 
            this.props.id
          );
      }

    render() {
        const beer = this.state.beer;
        return (
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
                <Link to={'/beers'} className='button is-success mt-3'>Back to all Beers</Link>
            </div>
        )
    }
}


