import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends Component{
    state ={
        beer: {}
    }

    componentDidMount(){
        axios.get("https://ironbeer-api.herokuapp/beers/random")
        .then(res => {
            this.setState({
                beer:res.data[0]
            })
        })        
    }
    render(){
        return(
            <div className="container">
            <div className = "row">
                <img className = "beerImg" src ={ this.state.beer.image_url} alt="beer"></img>
                <h4>{this.state.beer.name}</h4>
                <h4>{this.state.beer.tagline}</h4>
                <p>Created by: {this.state.beer.contributed_by}</p>
            </div>
            </div>
        )
    }
}

export default RandomBeer