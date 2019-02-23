import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import axios from 'axios';
import BeerCard from './BeerCard';

class AllBeers extends Component {

    constructor(){
        super()
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get("https://ironbeer-api.herokuapp.com/beers/all")
        .then(response => {
            this.setState({beers: response.data})
        })
    }

    render() {
        return (
            <div className="AllBeers">
                {this.state.beers.map((beer,idx) => {
                // <h1>{beer.name}</h1>
                return (<BeerCard key={idx} theBeer={beer}/>)
                })
              }
            </div>
        );
    }
}

export default AllBeers;