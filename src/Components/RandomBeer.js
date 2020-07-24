
import NavMain from './NavMain'
import axios from 'axios';

import React, { Component } from 'react'

export class RandomBeer extends Component {
    state = {
        beers: [],
        random : null,
      };

      getRandomBeer = () => {

      }
    
      componentDidMount() {
        const beerId = this.state.random;
        console.log(beerId);
        axios
          .get('https://ih-beers-api2.herokuapp.com/beers/')
          .then((res) => {
            console.log(res.data)
            this.setState({ beers: res.data });
            const randomBeer = this.state.beers[Math.floor(Math.random() * this.state.beers.length)];
            console.log(randomBeer)
            this.setState({ random : randomBeer})
          })
          .catch((error) => console.log(error));
      }
    
      render() {
        if (this.state.random === null) return <div>Loading...</div>;
    
        return (
            <div>
            <NavMain />
            <div className="details">
            <img style={{width:"10vh", paddingTop: "7vh", marginRight: "4vh",}} alt="r" src={this.state.random.image_url}/>
              <div className="info-onebeer">
              <div className="first-raw">
              <div className="first">
              <h3>{this.state.random.name}</h3>
              <p style={{color:"grey", fontWeight: "600", paddingTop: "1vh"}}>{this.state.random.tagline}</p>
              </div>
              <div className="second">
              <p style={{fontSize: "3vh", color:"grey"}}>{this.state.random.attenuation_level}</p>
              <p style={{paddingTop: "1vh"}}><b>{this.state.random.first_brewed}</b></p>
              </div>
              </div>
              <div className="text">
              <p>{this.state.random.description}</p>
              <p style={{paddingTop: "1vh"}}><b>{this.state.random.contributed_by}</b></p>
              </div>
              </div>
            </div>
            </div>
        )
      }
}

export default RandomBeer



