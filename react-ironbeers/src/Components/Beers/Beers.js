import React, { Component } from "react";
import { Link } from "react-router-dom";
import Beer from '../Beer/Beer'
import axios from "axios";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: null
    };
  }

  getBeers = () => {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(beerData => {
        this.setState({...this.state,beers:beerData.data})
      })
      .catch(e => console.log(e));
  };
  componentDidMount() {
    this.getBeers();
  }
  render() {
    
    return (this.state.beers) ? (
      <div>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
        {this.state.beers.map((beer,index)=>{
          return <Beer key={index} beerData={beer}/>
          
        })}
        <div />
      </div>
    ): (<div>Loading...</div>);
  }
}
