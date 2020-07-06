import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import '../App.css';

class BeersDetail extends Component {

  state = {
    beers: [],
    singleBeer: []
  };
  
  async componentDidMount() {
    let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers');

    this.setState({
      beers: res.data,
    });
  }
  

  singleBeer = () => {
    let singleBeer = this.state.beers.find((eachBeer) => {
      return (
        <div>
          <div>
            <img
              style={{ width: '90px' }}
              src={eachBeer.image_url}
              alt={eachBeer.name}
            />
            <div>
              <div>
                <h1>{eachBeer.name}</h1>
                <h3>{eachBeer.tagline}</h3>
              </div>
              <div>
                <h6>{eachBeer.attenuation_level}</h6>
                <h6>{eachBeer.first_brewed}</h6>
              </div>
              <p>{eachBeer.description}</p>
              <h6>{eachBeer.contributed_by}</h6>
            </div>
          </div>
        </div>
      );
    });
    return singleBeer;
  };

  render() {
    return (
      <div>
        <Header/>
        {this.singleBeer()}
      </div>
    );
  }
}

export default BeersDetail;
