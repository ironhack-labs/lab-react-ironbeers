import { Link } from "react-router-dom"
import Beer from "../components/Beer"
import React, { Component } from 'react'
import BeersService from '../services/beers.service';
export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
    this.beersService = new BeersService();
    // this.refreshState = this.refreshState.bind(this);
  }
  refreshState() {
    this.beersService
      .get()
      .then((response) => {
        console.log(response.data);
        this.setState({ beers: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }
  displayTodos() {
    const { beers } = this.state;
    return beers.map((beer) => {
      
      return (
        <Beer
          refreshState={() => this.refreshState()}
          key={beer.id}
          {...beer}
        />
      );
    });
  }

  
  
  render() {
      return (
        <div>
          <Link to = "/newBeer">Create a new beer</Link>
          <Link to ="/random-beer">Get a random beer</Link>
          {this.displayTodos()}
        </div>
      );
       
  }
}
