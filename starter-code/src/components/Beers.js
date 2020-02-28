import React, { Component } from "react";
import Header from "./Header.js";
import axios from "axios";
import Card from "./Card.js";

class Beers extends Component {
    state = {
      beers: [],
      search: ""
    };
  

  allBeers(){
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(e => {
      this.setState({
        beers: e.data
      })
    })
  };
  componentDidMount() {
    this.allBeers();
  }

  render() {
    return (
      <div>
        <div>
          <Header/>
        </div>
    
        <div>
          {this.state.beers.map((e, index) => (
            <Card data={e} key={index} />
          ))}
        </div>
      </div>
    );
  }
}


export default Beers;