import React from "react";
import axios from "axios";
import Header from "./../Components/Header";

class RandomBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    if (!this.state.beer) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header />

        {this.state.beer && (
        <img className="beerImg" src={this.state.beer.image_url} alt={this.state.beer.name} />
        )}
        <h1>{this.state.beer && this.state.beer.name}</h1>
        <h2>{this.state.beer && this.state.beer.tagline}</h2>
        <p>{this.state.beer && this.state.beer.first_brewed}</p>
        <p>{this.state.beer && this.state.beer.attenuation_level}</p>
        <p>{this.state.beer && this.state.beer.description}</p>
        <p>{this.state.beer && this.state.beer.contributed_by}</p>
      </div>
    );
  }

}

export default RandomBeer;

