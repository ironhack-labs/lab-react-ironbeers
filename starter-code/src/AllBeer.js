import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav';
import axios from "axios";
import './AllBeer.css';

export default class AllBeer extends Component {
    state={
       beers: [] 
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((allbeers) => {
          this.setState({
            ...this.state,
            beers: allbeers.data,
          });
        });
    }    

    render() {
        return (
            <div className="All-beer">
                <Nav></Nav>
                <h1>ALL BEERS</h1>
                {this.state.beers.map((beer) => (
                    <div className="Allbeer">
                    <Link to={beer._id}>
                        <img src={beer.image_url} alt={beer.name}/>
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <p>Created by: {beer.contributed_by}</p>
                    </Link>
                    </div>
                ))}
            </div>
        )
    }
}