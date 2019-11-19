import React, { Component } from 'react';
import './beer.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Beer extends Component {
    componentDidMount() {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
           .then((beer) => {
              this.props.dispBeer(beer);
           })
           .catch((err) => {
               console.log(err)
           });
    }
    displayBeer = () => {
    
        return (
            <div className="beer-self">
               <img src={this.props.beer.image_url} />
               <div className="beer-det">
                  <h2>{this.props.beer.name}</h2>
                  <h4>{this.props.beer.tagline}</h4>
                  <p>{this.props.beer.first_brewed}</p>
                  <p>{this.props.beer.attenuation_level}</p>
                  <p>{this.props.beer.description}</p>
                  <p>{this.props.beer.ontributed_by}</p>
               </div>
               
            </div>
        )
    }
    render() {
        return (
            <div className="beer-specific">
            <Link className="homeIcon" to="/home"><img src="/images/home.png" /></Link>
               {this.displayBeer()}
            </div>
        )
    }
}
