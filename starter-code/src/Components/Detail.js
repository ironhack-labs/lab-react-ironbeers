import React, { Component } from "react";
import UserContext, { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class Detail extends Component {
  static contextType = UserContext;

  state = {
    detail : {}
  }

  componentDidMount() {

    const { setLoad } = this.context;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/5daf440ccbc5d2fd7d19ebdd`)
      .then((res) => {
        this.setState({
          detail: res.data,
        });
        setLoad(false);
      });
  }

  render() {
    const item  = this.state.detail;

    return (
    <div>
      <div>{item.name}</div>
      <div>{item.abv}</div>
    
      <div>{item.tagline}</div>
      <div>{item.twist}</div>
      <div>{item.description}</div>
      <img alt={item.name} src={item.image_url}/>
      </div>
      )
  }
}

export default Detail;
