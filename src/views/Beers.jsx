import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavMain from './NavMain';
import axios from 'axios'
import { Link } from "react-router-dom";

export default class Beers extends Component {

    state = {
        beers: [],
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((responseFromApi) => {
      //console.log(responseFromApi);
      this.setState({
        beers: responseFromApi.data,
      });
    });
  }

    render() {
        return (
            <div>
                <NavMain />
                <h2>Beers page</h2>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img
                style={{
                  width: '30px',
                  height: '30px',
                }}
                src={beer.image_url}
                alt={beer.name}
              />
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
               
              </Link> 
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
            </div>
            
           ) }
          )}
         </div> 
         )
        }
    }