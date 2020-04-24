import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class Beers extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then((res) => {
      this.setState({ allBeers: res.data });
      console.log(this.state.allBeers);
    });
  }

  render() {
    return (
      <div>
        {this.state.allBeers.map((item, index) => {
          return(
          <div key={index}>
              <img alt={item.name} src={item.image_url}></img>
              {item.name}<br/>
              {item.tagline}<br/>

          </div>
          )
        })}
      </div>
    );
  }
}

export default Beers;
