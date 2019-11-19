import React, { Component } from 'react';
import './beers.css';
import {Link} from 'react-router-dom';

export default class Beers extends Component {
    displayBeerList = () => {
        return this.props.allBeers.map((beer,ind) => {
            return (
                <Link key={ind} to={`/beers/${beer._id}`}><div  className="beer">
                   <img src={beer.image_url} />
                   <div className="con">
                      <h3>{beer.name}</h3>
                      <p>{beer.tagline}</p>
                      <p>{beer.contributed_by}</p>
                   </div>
                </div>
                </Link>
            )
        })
    }
    render() {
        return (
            <div className="beers-page">
              <Link className="homeIcon" to="/home"><img src="/images/home.png" /></Link>
              <div className="beer-list-content">
                 {this.displayBeerList()}
              </div>
            </div>
        )
    }
}
