import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from 'axios'
import {SingleBeer} from "./SingleBeer";

export default class SingleBeerPage extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      loading: true,
      beers: null
    };
  }
 
componentDidMount(){
  let beerId = this.props.match.params.id
  
  let url = `https://ironbeer-api.herokuapp.com/beers/single/${beerId}`;
  axios.get(url)
    .then(res => {
      this.setState({beers:res.data})
    })
}

  render() {

    return (
      <div>
       
        <Link to={"/random-beer"}><h2>Random Beer</h2></Link>
        <Link to={"/new-beer"}><h2>New Beer</h2></Link>
        {this.state.beers ? <SingleBeer key={this.state.beers.id}{...this.state.beers}/>: <p>loading...</p>}
      </div>
    );
  }
}