import React, { Component } from 'react';
import Nav from './Nav';
import axios from "axios";
import './RandomBeer.css';

export default class RandomBeer extends Component {

    state={
        randomBeer: {}
    }
    componentDidMount(){
        let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((allbeers) => {
            console.log(allbeers.data[randomInt(0,allbeers.data.length)]) 
            console.log(allbeers.data.length) 
        this.setState({
            ...this.state,
            randomBeer: allbeers.data[randomInt(0,allbeers.data.length)]
          });
        });
    }  

    // componentDidMount(){
    //     axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then((randomBeer) => {
    //       this.setState({
    //         ...this.state,
    //         randomBeer: randomBeer.data,
    //       });
    //     });
    // }

    render() {
        return (
            <div>
               <Nav></Nav>
                <div className="randomBeer">
                    <img src={this.state.randomBeer.image_url} alt=""/>
                    <h1>{this.state.randomBeer.name}</h1>
                    <p>{this.state.randomBeer.description}</p>
                </div>
            </div>
        )
    }
}