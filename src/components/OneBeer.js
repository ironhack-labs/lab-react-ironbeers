import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


class OneBeer extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }
  componentDidMount() {
    this.getSingleBeer();
  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }
  getSingleBeer = () => {
   
    axios
      .get(`http://localhost:3000/beers/${this.props._id}`)
      .then(responseFromApi => {
        const theBeer = responseFromApi.data;
        this.setState(theBeer);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render(){
    return (
      <div>
        <div>
          <img src={this.state.image_url} alt="" />
          <h1>{this.state.name}</h1>
          <h2>{this.state.tagline}</h2>
          <h3>{this.state.first_brewed}</h3>
          <h4>{this.state.attenuation_level}</h4>
          <p>{this.state.description}</p>
          <h5>{this.state.contributed_by}</h5>
          <Link to={"/beers"}>Back to BeerList</Link>
        </div>
      </div>
    )
  }
}

export default OneBeer;