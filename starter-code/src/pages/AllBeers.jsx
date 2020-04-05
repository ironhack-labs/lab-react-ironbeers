import React, { Component } from 'react';
import Nav from '../components/Nav.jsx';
import axios from 'axios'; 
import './allBeers.css';
// import {  Route } from 'react-router-dom';
// import SingleBeer from './SingleBeer';


class AllBeers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            beers: []
        }
    }
      componentDidMount(){
    axios
      .get("https://ih-beers-api.herokuapp.com/beers")
      .then((response) => {
        this.setState({ beers: response.data })
      });
  }
  debugger
    render() {
        return (
          <div>
            <Nav />
            {this.state.beers.map((beerList, index) => (
              <div className="cardContainer">
                {/* <SingleBeer key={index} thename={this.state.beers.name} /> */}
                <img
                  src={beerList.image_url}
                  alt="{beerList.image_url}"
                  className="cardImg"
                />

                <div>
                  <h3>{beerList.name}</h3>
                  <h5>{beerList.tagline}</h5>
                  <p>Created by: {beerList.contributed_by}</p>
                  {/* <Route path={`/beers/${beerList._id}`} component={SingleBeer}/> */}
                  {/* <Link to={`/beers/${beerList._id}`}>{beerList.name}</Link> */}
                </div>
              </div>
            ))}
          </div>
        );
    }
}

export default AllBeers;
