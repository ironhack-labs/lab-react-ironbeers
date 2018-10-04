import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios'
import {CardBeer} from "./CardBeer";

export default class AllBeers extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      loading: true,
      beers: null
    };
  }
 
componentDidMount(){
  let url = 'https://ironbeer-api.herokuapp.com/beers/all';
  axios.get(url)
    .then(res => {
      this.setState({beers:res.data})
    })
}

  render() {
    return (
      <div>
        <NavBar/>
        <Link to={"/random-beer"}><h2>Random Beer</h2></Link>
        <Link to={"/new-beer"}><h2>New Beer</h2></Link>
        {this.state.beers ? this.state.beers.map(beer => <CardBeer key={beer.id}{...beer}/> ): <p>loading...</p>}
      </div>
    );
  }
}
