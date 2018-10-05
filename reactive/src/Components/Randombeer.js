import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import axios from 'axios'
import {SingleBeer} from "./SingleBeer";

export default class Randombeer extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      loading: true,
      beers: null
    };
  }
 
componentDidMount(){
  let url = `https://ironbeer-api.herokuapp.com/beers/random`;
  axios.get(url)
    .then(res => {
      this.setState({beers:res.data[0]})
    })
}

  render() {
    console.log(this.state.beers)
    return (
      <div>
        <NavBar/>
        <Link to={"/beers"}><h2>All Beers</h2></Link>
        <Link to={"/new-beer"}><h2>New Beer</h2></Link>
        {this.state.beers ? <SingleBeer key={this.state.beers._id}{...this.state.beers}/>: <p>loading...</p>}
      </div>
    );
  }
}
