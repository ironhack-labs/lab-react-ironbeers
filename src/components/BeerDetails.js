import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Navbar from './Navbar';



class BeerDetails extends Component {
    
    state = {
        oneBeer: []
    }
    
    componentDidMount(){
        this.getSingleBeer();
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state, callback) => {
          return;
        };
    }

    getSingleBeer = () => {
        const {params} = this.props.match
        axios
        .get(`https://api.punkapi.com/v2/beers/${params.id}`)
        .then(response => {
            this.setState({oneBeer: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    };

    render(){
    return (
        <div>
            <Navbar/>
            {this.state.oneBeer.map((beer, index) => {
                return(
                    <div className="detalles" key={index}>
                        <img src={beer.image_url} alt=""/>
                        <h1> {beer.name} </h1>
                        <h2> {beer.tagline} </h2>
                        <h4>{beer.first_brewed}</h4>
                        <i>{beer.attenuation_level}</i>
                        <p> {beer.description} </p>
                        <Link to={"/beers"}> Go Back </Link>
                    </div>
                )
            })}
            
        </div>
    )
    }
}

export default BeerDetails;
