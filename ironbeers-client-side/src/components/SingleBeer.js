import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { beer: {} };
  }

  getSingleBeer = () => {
    const { params } = this.props.match;

    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
      .then(responseFromApi => {
        this.setState({
          beer: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleBeer();
  }

  render() {
    return (
      <div>
        <Header />
        <img src={this.state.beer.image_url} alt="" style={{ width: "20%" }}/>
        <h1>{this.state.beer.name}</h1>
        <h2>{this.state.beer.tagline}</h2>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}

export default SingleBeer;
