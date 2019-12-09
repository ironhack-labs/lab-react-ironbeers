import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Beersapi from "../components/Beersapi";
import axios from "axios";

class Singlebeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: {}
    };
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount() {
    let beerId = this.props.match.params.id;
    //console.log(beerId);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        this.setState({ beers: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let beers = this.state.beers;
    return (
      <div>
        <Navbar />
        <div className='single-beer'>
          <img src={beers.image_url} alt='' />
          <h1>{beers.name}</h1>
          <p>{beers.tagline}</p>
          <p>{beers.first_brewed}</p>
          <p>{beers.atenuation_level}</p>
          <p>{beers.description}</p>
          <p>{beers.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default Singlebeer;
