import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends Component {

  state = {
    beer: ''
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/random")
    .then(response => {
      this.setState({beer: response.data[0]})
      console.log(response.data)
    })
  }

  

  render() {
    return (
      <div className="RandomBeer container">
       <div className="card md-col-4">
           <img className="card-img-top" src={this.state.beer.image_url} alt="Beer" />
           <div className="card-body">
            <h5 className="card-title">{this.state.beer.name}</h5>
             <p className="card-text">{this.state.beer.tagline}</p>
             <p className="card-text">Created By: {this.state.beer.contributed_by}</p>
           </div>
         </div>
      </div>
    );
  }
}

export default RandomBeer;