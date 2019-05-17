import React from "react";
import axios from "axios";
class RandomBeer extends React.Component {
  state = {
    singleBeer: []
  };

  componentDidMount() {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/random`)
      .then(response => {
        console.log(response.data);
        this.setState({
          singleBeer: response.data
        });
      });
  }

  render() {
    return (
      <div>
        <img
          style={{ padding: "25px", width: "75px" }}
          src={this.state.singleBeer.image_url}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{this.state.singleBeer.name}</p>

          <p>{this.state.singleBeer.attenuation_level}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{this.state.singleBeer.tagline}</p>
          <p>{this.state.singleBeer.first_brewed}</p>
        </div>
        <div>
          <p>{this.state.singleBeer.description}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
