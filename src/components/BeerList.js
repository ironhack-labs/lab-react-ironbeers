import React, { Component } from "react";
import BeerListElement from "./BeerListElement";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: null
    };
  }

  componentDidMount(){
    if(!this.state.beers){
      this.fetchBeers()
    }
  }

  fetchBeers(){
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(beers => {
        this.setState({beers: beers.data})
      });
  }
  


  render() {
    let { beers } = this.state;
    if (!beers) {
      return <h1>Loading, please wait...</h1>;
    } else {
      return (
        <div>
          {beers.map(beer=> {
            let link = beer.id
            return (
              <Link to={`/beers/${link}`}>
                <BeerListElement beer={beer}/>
              </Link>
            )
          })}
        </div>
      );
    }
  }
}
