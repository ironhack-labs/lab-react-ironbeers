import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            // console.log(response.data[0])
            this.setState({beers: response.data})
        })
    }
    render() {
        return (

            
            <div>
                 {this.state.beers.map(beer =>
                 <div key={beer._id}>
                 <img src ={beer.image_url} alt={beer.name} style={{height:'200px'}}></img>
                  <h1 >{beer.name}</h1>
                  <h3 >{beer.tagline}</h3>
                  <h3 ><strong>Created by:</strong> {beer.contributed_by}</h3>
                  <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                  </div>
                  )}     
            </div>
        )
    }
}

