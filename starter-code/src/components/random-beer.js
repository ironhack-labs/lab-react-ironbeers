import React, { Component } from 'react';
// import axios from 'axios';
import Navbar from './nav';
import {getRandomBeer} from '../utils/beer';


class RandomBeer extends Component {
    constructor() {
        super()
        this.state = {
            randomBeer: {}     
        }
    }

    componentDidMount() {
        // debugger
        getRandomBeer()
        .then(response => {
            console.log(response)
            let tempBeer = {...response.data}
            if (response.data.first_brewed) {
                tempBeer.first_brewed = tempBeer.first_brewed.slice(0,10) // cleaning up the ugly system time part of it
            }
            this.setState({randomBeer: tempBeer})
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    render() {
        // debugger
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
