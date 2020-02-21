import Header from "./../components/header"
import axios from "axios"; 
import { NavLink } from "react-router-dom";

import React, { Component } from 'react'

export default class AllBeers extends Component {

    state = {
        beers: [],
        APIEndpoint: "https://ih-beers-api2.herokuapp.com/beers"
      };

      componentDidMount() {
        axios
          .get(this.state.APIEndpoint)
          .then(apiRes => this.setState({ beers: apiRes.data }))
          .catch(apiErr => console.error(apiErr));
      }



    render() 
        
    {
        console.log(this.state.beers)
        return (
            <div>
                
                <Header/>
                <h1>All Beers page</h1>
                {this.state.beers.map((b, i) => (
                    <div key={i}>
                        <img src={b.image_url} alt="beer's photo"/><br/>
                        {b.name} <br/>
                        <NavLink 
                            to={`/single-beer/${b._id}`} 
                            >{b.tagline} </NavLink><br/>
                        {b.contributed_by}
                    </div>
                ))}
                <br/>
            </div>
        )
    }
}
