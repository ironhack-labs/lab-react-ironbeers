import React, { Component } from "react";
import axios from "axios";
import Heading from "./../layout/Heading";

class Beers extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    try {
      const res = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      const beers = await res.data;
      console.log(beers);
      this.setState({
        beers
      });
    } catch (e) {
      console.log(e);
      console.log("Error in service.");
    }
  }
  // componentDidMount() {
  //   axios
  //     .get('https://ih-beers-api2.herokuapp.com/beers')
  //     .then(res => console.log(res))
  //     .catch(e => console.log(e));
  // }

  render() {
    const beers = this.state.beers;
    return (
      <div>
        <Heading />
        {beers.map(beer =>
          <div key={beer._id} className="beer-list">
            <img src={beer.image_url} alt="" />
            <div className="beerDetails">
              <p className="beerName">{beer.name}</p>
              <p className="beerTagline">{beer.tagline}</p>
              <p className="beerContributor">{beer.contributed_by}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Beers;
