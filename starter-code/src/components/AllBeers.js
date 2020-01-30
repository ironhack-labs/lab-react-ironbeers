import React, { Component } from 'react';
import axios from 'axios';
import Header from "./Header";

class AllBeers extends Component {
    constructor() {
        console.log("App --> constructor()");
        super()
        this.state = {
            beers: []
        }
    }
    
    componentDidMount() {
        console.log("App --> componentDidMount()")
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                console.log("App --> Promise resolved")
                this.setState({ beers: response.data })
            })
    }


    render() {
        console.log("App --> render()")
        console.log(this.state.beers)
        const beerList = this.state.beers.map((beer) => {
            return (
            <div key = {beer._id} className = "beer-container">
                <ul>
                    <img src = {beer.image_url}></img>
                    <li>{beer.name}</li>
                    <li>{beer.tagline}</li>
                    <li>{beer.contributed_by}</li>
                </ul>
            </div>
            )                                 
          });


        return (
            
            <div>
                <Header/>
                <div>                
                <h1>All Beers</h1>
                <div>{beerList}</div>
                </div>                
            </div>
        )
    }
}

export default AllBeers;