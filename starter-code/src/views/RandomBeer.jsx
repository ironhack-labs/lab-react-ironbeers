import React from 'react'
import axios from "axios";

class RandomBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params.id);

    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => { });
  }

  render() {
    if (!this.state.beer) return null;
    return (<div className="beer__display">
      <h1>A random beer!</h1>

      <img src={this.state.beer.image_url} alt={this.state.beer.name}></img>
      <h3>{`Name: ${this.state.beer.name}`}</h3>
      <p>{`Tagline: ${this.state.beer.tagline}`}</p>
      <p>{`First Brewed: ${this.state.beer.first_brewed}`}</p>
      <p>{`Attenuation Level: ${this.state.beer.attenuation_level}`}</p>
      <p>{`Contributed By: ${this.state.beer.contributed_by}`}</p>
    </div>
    )
  }
}


export default RandomBeer
