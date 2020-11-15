import React, { Component } from 'react';
import axios from "axios";
import Navbar from './Navbar';
import {Link} from "react-router-dom";
import NewBeer from './NewBeer';

class BeerList extends Component{
    state = {
        listBeers : []
    }


    getAllBeers = () => {
        axios
        .get("https://api.punkapi.com/v2/beers")
        .then(response => {
            this.setState({
                listBeers: response.data
            })
        })
    };

    addBeerHandle = (beer) => {
        const beerCopy = [...this.state.listBeers]

        beerCopy.push(beer)
        this.setState({
            beers: beerCopy,
        })
    }

    componentDidMount (){
        this.getAllBeers();
    } 


    render(){
    return (
        <div>
            <Navbar />
            <div>
                {this.state.listBeers.map((beer) => {
                    return(
                        <div>
                        <div className="container" key={beer.id}>
                            <div className="imagen-cerveza">
                                <img src={beer.image_url} alt=""/>
                            </div>
                            <div className="descripcion">
                                <h1> {beer.name} </h1>
                                <h2> {beer.tagline} </h2>
                                <p> {beer.contributed_by} </p>
                                <Link to={`/beers/${beer.id}`}> Check Details </Link> 
                            </div>
                        </div>
                        <div>
                            <hr/>
                        </div>   
                        </div>
                    )
                })}
            </div>
        </div>
    )
    }
}

export default BeerList;