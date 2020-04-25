import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

class Beers extends Component {
  state = {
    allBeers: [],
    loadStatus:false
  };

  componentDidMount() {
    this.setState({loadStatus: true})
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then((res) => {
      this.setState({ 
        allBeers: res.data,
        loadStatus:false
       });
    });
  }

  render() {
    let load = this.state.loadStatus;
    let content;
    if(load == true){
      content = <div className="Loading"><img alt='loading' src="./images/load.gif"/>Loading</div>
    } else {
      content =     <div>
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
    }

    return (
      <div>{content}</div>
    );
  }
}

export default Beers;
