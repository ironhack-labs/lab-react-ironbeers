import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

class RandomBeer extends Component {
    constructor(){
        super();
        this.state = {
            beer:[]
        }
    }
    componentWillMount(){
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
        .then(res => {
          this.setState({ 
              beer: {...res.data[0]}
          });
        })
        .catch(e => console.log('Error on Axios', e.message));
    }

    render() {
        return (
            <div className="RandomBeer">
            <Header/>

            <div className="card" >
            <img className="card-img-top randombeerimg" src={this.state.beer.image_url} alt="beer"/>
            <div className="card-body">
                <h5 className="card-title">{this.state.beer.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.beer.tagline}</h6>
                <p><b>First Brewed:</b>{this.state.beer.first_brewed}</p>
                <p><b>Attenuation Level:</b>{this.state.beer.attenuation_level}</p>
                <p className="card-text">{this.state.beer.description}</p>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.beer.contributed_by}</h6>
            </div>
            </div>
            
            </div>
            )
    }
}

export default RandomBeer;