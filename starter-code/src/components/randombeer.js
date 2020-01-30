import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class randombeer extends Component {
    
    
    constructor(props){
        super(props)
        this.state = {
            randombeer: []
        }
        this.randomBeer = this.randomBeer.bind(this);
    }

    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            this.setState({randombeer: response.data});
        })
    }

    randomBeer(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            this.setState({randombeer: response.data});
        })
    }

    render() {
        console.log(this.state.randombeer.name)
        return (
            <div ClassName="Randomizer">
            <button onClick={this.randomBeer}>Random Trigger</button>
                <img src={this.state.randombeer.image_url} alt="NoPic" />
                <h1>{this.state.randombeer.name}</h1>
                <p>{this.state.randombeer.tagline}</p><br/>
                <p>{this.state.randombeer.first_brewed}</p><br/>
                <p>{this.state.randombeer.attenuation_level}</p><br/>
                <p><b>{this.state.randombeer.description}</b></p><br/>
                <p>{this.state.randombeer.contributed_by}</p><br/>
            </div>
        )
    }
}
