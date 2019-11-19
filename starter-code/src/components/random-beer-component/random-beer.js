import React, { Component } from 'react';
import './random-beer.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class RandomBeer extends Component {
    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
             .then((beer) => {
                 console.log(beer)
                this.props.dispBeerRand(beer);
             })
             .catch((err) => {
                 console.log(err)
             });
      }
      dispRandomBeer = () => {
          return (
            <div className="beer-self">
            <img src={this.props.randomBeer.image_url} />
            <div className="beer-det">
               <h2>{this.props.randomBeer.name}</h2>
               <h4>{this.props.randomBeer.tagline}</h4>
               <p>{this.props.randomBeer.first_brewed}</p>
               <p>{this.props.randomBeer.attenuation_level}</p>
               <p>{this.props.randomBeer.description}</p>
               <p>{this.props.randomBeer.ontributed_by}</p>
            </div>
            
         </div>
          )
      }
    render() {
        return (
            <div className="random-beer-page">
            <Link className="homeIcon" to="/home"><img src="/images/home.png" /></Link>
              {this.dispRandomBeer()}
            </div>
        )
    }
}
