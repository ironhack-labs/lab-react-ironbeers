import React, { Component } from 'react'
import axios from "axios";
import NavBar from "../components/NavBar";

import { Link } from "react-router-dom";



class SingleBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      componentDidMount() {
        this.getSingleBeer();
      }
     
    
      getSingleBeer = () => {

        const { params } = this.props.match;
        
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
          .then(responseFromApi => {
            const theBeer = responseFromApi.data;
            
            this.setState(theBeer);
          })
          .catch(err => {
            console.log(err);
          });
      };
      
      

    render() {
        return (
            <div>
            <NavBar />
                <div className="beer">
                <img src={this.state.image_url} />
                <h1>{this.state.name}</h1>
                <h3>{this.state.tagline}</h3>
                <h3>{this.state.first_brewed}</h3>
                <h4>{this.state.attenuation_level}</h4>
                <h6>{this.state.description}</h6>
                <h6>{this.state.contributed_by}</h6>
                <Link to={`/AllBeers/`}>All Beers</Link>
                </div>
            </div>
        )
    }
}

export default SingleBeer
