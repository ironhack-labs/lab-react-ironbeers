import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends Component{

  state = {
    beers: false
  }

  componentDidMount() {
  axios.get('https://ih-beers-api2.herokuapp.com/beers')
  .then(response => { this.setState({beers: response.data}) })
  .catch(error => { console.log(error) });
  };

  render(){
    return(
      <div>
        <h1>All Beers</h1>
        <ul>{
          this.state.beers && this.state.beers.map( (beer, index) => {
            return <Link to={`/onebeer/${ beer._id }`} key={ index }>
              { beer.name }
            </Link>
          } )
        }</ul>
      </div>
    );
  }
}

export default Beers;