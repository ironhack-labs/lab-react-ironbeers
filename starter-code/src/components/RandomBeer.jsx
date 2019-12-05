import React, { Component } from 'react'
import axios from "axios";
import NavBar from "./NavBar";
import Card from "./Card";

export default class RandomBeer extends Component {
    constructor() {
        super();
    
        this.state = {
          beer: {}
        };
      }
      componentDidMount() {
          axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(beer => {
            console.log(beer);
            this.setState({
              ...this.state,
              beer: beer
            });
          });
        }
      
    
      render() {
        return (
          <React.Fragment>
            <NavBar></NavBar>
            <Card beer={this.state.beer}></Card>
          </React.Fragment>
        );
      }
}
