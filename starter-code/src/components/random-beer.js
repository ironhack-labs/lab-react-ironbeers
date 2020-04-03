import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './nav';


class RandomBeer extends Component {
    constructor() {
        super()

        this.state = {
            randomBeer: {}     
        }
    }

    componentDidMount() {
        debugger
        axios.get("https://ih-beers-api.herokuapp.com/beers/random")
        .then(response => {
            console.log(response)
            this.setState({randomBeer: response.data})
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        debugger
        return (
           
            <div>
                 <Navbar />
                <h1>Here is a random pick for you</h1>
                
                <div className= "beer-bottle">
                    <div>
                        <img src={this.state.randomBeer.image_url} alt=""/>
                    </div>
                    <div className="desc">
                        <h2 >{this.state.randomBeer.name}</h2> 
                        <p>{this.state.randomBeer.tagline}</p>
                        <p>{this.state.randomBeer.first_brewed}</p>
                        <p>{this.state.randomBeer.attenuation_level}</p>
                        <p>{this.state.randomBeer.description}</p>
                        <p>{this.state.randomBeer.contributed_by}</p>
                    </div>
                    
                </div>
            </div>
        )
  
    }
}



export default RandomBeer;
