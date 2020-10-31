import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import OneBeer from './OneBeer'


const ALL_BEER = 'https://ih-beers-api2.herokuapp.com/beers';

export default class Beers extends Component {
  state = {
    beers: '',
  };

  componentDidMount() {
    fetch(ALL_BEER)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
      //  console.log(data);
        this.setState({
          beers: data,
        });
      });
  }

  render() {
  //  console.log(this.state.beers);
    if (this.state.beers.length < 1) {
      return <h2>Loading...</h2>;
    }
    return (
      <div > 
        {this.state.beers.map((item) => (
          <div style={{display: "flex"}}  key={item._id}>
            <div className="image">
              <img src={item.image_url} alt="" />
            </div>
            <div className="text">
              <div>{item.name}</div>
              <div>{item.tagline}</div>
              <div>{item.contributed_by}</div>
              <Link to={`/beers/${item._id}`}>Open the beer details</Link> 
             
            </div>
          </div>
        ))}
        <br/>
      </div>
    );
  }
}


