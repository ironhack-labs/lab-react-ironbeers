import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import axios from "axios";

export default class RandomBeer extends Component {
    constructor(){
        super()
        this.state={
            randombeer: {},
        }
    }

    componentDidMount(){
  
            const URL = "https://ih-beers-api2.herokuapp.com/beers/random";
            axios.get(URL).then((randombeer) => {
              this.setState({
                ...this.state,
                randombeer: randombeer.data,
              });
            });
        
          
    }


    render() {
        return (
            <div class="page">
                <Nav></Nav>
                <div class="section detail">
                    <div><img src={this.state.randombeer.image_url} alt="" className="src" /></div>
                    <div>
                        <h2>{this.state.randombeer.name}</h2>
                        <h4>{this.state.randombeer.tagline}</h4>
                        <p>{this.state.randombeer.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
