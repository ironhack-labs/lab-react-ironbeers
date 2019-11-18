import React, { Component } from 'react'
import Header from './Header.js';
import Axios from 'axios';

export class Random extends Component {
    constructor(props){
        super(props);
        this.state = {
        randomBeer:{}
            }  
        }

    componentDidMount() {
        Axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response => {
          this.setState({ randomBeer:response.data });
        })
        .catch(error => {
          console.log(error);
        });
      }
    render() {
        return (
            <>
            <Header/>
            <div className="single-beer">
            <img src={this.state.randomBeer.image_url} style={{width:"80px"}}/>
            <div style={{width:"400px"}}>
            <div style={{width:"400px", display:"flex", alignItems:"flex-start"}}><h1>{this.state.randomBeer.name}</h1> 
            <p style={{width:"30px", marginTop:"30px", textSize:"200px"}}>{this.state.randomBeer.attenuation_level}</p>
            </div>
            <div style={{width:"400px", display:"flex", alignItems:"flex-start"}}>
            <p>{this.state.randomBeer.tagline}</p>
            <h4>{this.state.randomBeer.first_brewed}</h4>
            </div>
          
           
            <h3>{this.state.randomBeer.description}</h3>
            <p>{this.state.randomBeer.contributed_by}</p>
            </div>
            </div>
        
            </>
        )
    }
}

export default Random
