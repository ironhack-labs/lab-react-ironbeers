import "./random.css"
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class RandomBeer extends Component {

  state = {
    randomBeer: []
  }

  componentDidMount = async () => {
    const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)

    this.setState({
      randomBeer: data
    })

  }
  // {this.state.randomBeer.attenuation_level}

  render() {
    return (
      <div>
        <nav className="nav-home">
          <Link to="/">
            <img className="img-home" src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695369.jpg"></img>
          </Link>
        </nav>
        <div className="random-beer-center">
          <div className="random-beer-column">
            <div>
              <img className="random-beer-img" src={this.state.randomBeer.image_url} />
            </div>
            <h1 className = "random-beer-name">{this.state.randomBeer.name}</h1>

            <p className = "random-beer-tagline">{this.state.randomBeer.tagline} {this.state.randomBeer.first_brewed}</p>
            <p className = "random-beer-description">{this.state.randomBeer.description}</p>
            
            
            {this.state.randomBeer.contributed_by}
          </div>
        </div>
      </div>
    )
  }
}
export default RandomBeer