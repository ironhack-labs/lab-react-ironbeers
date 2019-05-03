import React, { Component } from 'react';
import axios from "axios";
import Navbar from '../navbar/Navbar';

export default class beer extends Component {
  state = {
    beer : {}

  }

  componentDidMount(){

    axios
        .get(`http://localhost:5000/single/${this.props.match.params._id}`)
        .then(theBeer=> {
            const Beer = theBeer.data

            this.setState({
                ...this.state,
                beer: Beer
            })
        })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          <img src={this.state.beer.image_url} alt="beer" />
          <h2>{this.state.beer.name}</h2>
          <h4>{this.state.beer.tagline}</h4>
          <p>{this.state.beer.contributed_by}</p>
        </div>
      </React.Fragment>
    )
  }
}
