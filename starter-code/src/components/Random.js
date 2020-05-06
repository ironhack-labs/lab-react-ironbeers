import React, { Component } from "react";
import axios from "axios";
import Navbar from './Navbar';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getRandomBeer = this.getRandomBeer.bind(this);
  }

  
  getRandomBeer() {
    axios
      .get('http://ih-beers-api.herokuapp.com/beers/random')
      .then(response => {
        const oneBeer = response.data;
        this.setState(oneBeer);
        // console.log(this.state)
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getRandomBeer();
  }

    render() {
    return (
        <div>
            <Navbar/>
        <div className="card-onebeer">
          <div className="img-onebeer">
            <img src={this.state.image_url} alt=""/>
          </div>
          <div className="body-onebeer">
            <h3>{this.state.name}</h3>
            <h3>{this.state.attenuation_level}</h3>
            <h5>{this.state.tagline}</h5>
            <h5>{this.state.first_brewed}</h5>
            <h5>{this.state.description}</h5>
            <p>{this.state.contributed_by}</p>
          </div>
            </div>
      </div>
    );
  }
}

export default Random;