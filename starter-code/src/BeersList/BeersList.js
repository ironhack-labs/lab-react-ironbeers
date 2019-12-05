import React, { Component } from 'react'
import EachBeer from '../EachBeer/EachBeer';
import { Link } from "react-router-dom";

export default class BeersList extends Component {
    constructor(props) {
        super();
    
        this.state = {
          beers: props.beers
        };
      }


    render() {
        return (
            <div className="marginpage">
            <h1>Lista</h1>
                <ul class="beerlist">
                {this.props.beers.map((beer) => {
            return (
              <li key={beer._id}>
                <Link to={`/${beer._id}`}><EachBeer data={beer}></EachBeer></Link> -{" "}
                
              </li>
            );
          })}
                </ul>
            </div>
        )
    }
}
