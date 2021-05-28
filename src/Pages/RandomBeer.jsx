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

        <div className="card mb-3">
          {this.state.beer && (
          <img className="beerImg" src={this.state.beer.image_url} alt={this.state.beer.name}/>
          )}
          <div className="card-body">
            <h5 className="card-title">{this.state.beer && this.state.beer.name}</h5>
            <p className="card-text">{this.state.beer && this.state.beer.tagline}</p>
            <p className="card-text">{this.state.beer && this.state.beer.first_brewed}</p>
            <p className="card-text">{this.state.beer && this.state.beer.attenuation_level}</p>
            <p className="card-text">{this.state.beer && this.state.beer.description}</p>
            <p className="card-text"><small class="text-muted">{this.state.beer && this.state.beer.contributed_by}</small></p>
          </div>
        </div>


      </div>
    );
  }

}

export default RandomBeer;

