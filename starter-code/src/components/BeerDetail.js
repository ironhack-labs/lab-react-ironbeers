import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

class BeerDetail extends Component {
  state = {
    beer: null
  };

  componentDidMount = () => {
    const idToFind = this.props? this.props.match.params.id: this.props.randomId;
    console.log("Beer detail props: ",this.props)
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${idToFind}`)
      .then(response => {
        this.setState({
          beer: response
        });
      });
  };

  render() {
    const beerData = this.state.beer;
    console.log("Beer detail props: ",this.props)
    console.log("beer data: ", beerData);
    if (!beerData) return <></>;
    else
      return (
        <>
          <Header />
          <div className="container">
            <img
              src={beerData.data.image_url}
              height="300px"
              alt="Beer bottle"
            />
            <div className="flex-line">
              <h1>{beerData.data.name}</h1>
              <h2>{beerData.data.attenuation_level}</h2>
            </div>
            <div className="flex-line">
              <h3>{beerData.data.tagline}</h3>
              <h4>{beerData.data.first_brewed}</h4>
            </div>
            <div className="flex-line">
              <p>{beerData.data.description}</p>
            </div>
            <div className="flex-line">
              <p>{beerData.data.contributed_by}</p>
            </div>
          </div>
        </>
      );
  }
}

export default BeerDetail;
