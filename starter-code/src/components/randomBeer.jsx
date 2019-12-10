import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getRandom } from "../services/beer";

export class randomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }
  componentWillMount() {
    getRandom().then(beer => {
      this.setState({
        beer: beer
      });
    });
  }
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img
              src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
              alt="Home icon"
            />
          </Link>
        </nav>
        <div>
          {this.state.beer && (
            <img src={this.state.beer.image_url} alt={this.state.beer.name} />
          )}
          {this.state.beer && <h4>{this.state.beer.name}</h4>}
          {this.state.beer && <h4>{this.state.beer.tagline}</h4>}
          {this.state.beer && <h4>{this.state.beer.first_brewed}</h4>}
          {this.state.beer && <h4>{this.state.beer.attenuation_level}</h4>}
          {this.state.beer && <h4>{this.state.beer.description}</h4>}
          {this.state.beer && <h4>{this.state.beer.contributed_by}</h4>}
        </div>
      </div>
    );
  }
}

export default randomBeer;
