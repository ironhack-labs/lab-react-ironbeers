import React, { Component } from "react";
import UserContext, { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class Random extends Component {
  static contextType = UserContext;

  state ={
      random: {}
  }

  componentDidMount() {
    const { setLoad } = this.context;
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((res) => {
      setLoad(true);
      this.setState({
        random: res.data,
      });
      setLoad(false);
    });
  }


  render() {
    const item = this.state.random;
    return (
      <div className="beer-container">
           <div className="beer-detail">
        <img alt={item.name} src={item.image_url} />
        <div>{item.name}</div>
        <div>{item.tagline}</div>
        <div>{item.first_brewed}</div>
        <div>{item.attenuation_level}</div>
        <div>{item.description}</div>
        </div>
      </div>
    );
  }
}

export default Random