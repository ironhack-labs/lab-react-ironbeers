import React from "react";
import NavHome from "./NavHome";
import { Link } from "react-router-dom";
//========= Axios
import axios from "axios";

class RandomBeer extends React.Component {
  state = {
    beers: {}
  };

  //========== Important because async!!!! to render the data and automaticly update
  componentDidMount() {
    let linkUrl = "https://ih-beer-api.herokuapp.com/beers/random";
    axios.get(linkUrl).then(data => {
      this.setState({
        beers: data.data
      });
    });
  }

  render() {
    return (
      <div>
        <NavHome />
        <div className="beer">
          <img src={this.state.beers.image_url} alt="" />
          <div className="content">
            <h2>{this.state.beers.name}</h2>
            <h4>{this.state.beers.tagline}</h4>
            <p>{this.state.beers.first_brewed}</p>
            <p>{this.state.beers.attenuation_level}</p>
            <p>{this.state.beers.description}</p>
            <p>{this.state.beers.contributed_by}</p>
          </div>
        </div>

        <Link to="/list-beers">
          <i class="fas fa-pizza-slice fa-3x"></i>
        </Link>
      </div>
    );
  }
}

export default RandomBeer;
