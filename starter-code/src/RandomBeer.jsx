import React, { Component } from 'react';
import axios from "axios";

class RandomBeer extends Component {
  state = {
    theBeer: {}
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => {
      this.setState({
        theBeer: res.data
      });
    });
  }

  findDetails = () => {
    console.log(this.props.match.params.beerId);
    console.log(this);
    let theBeer = this.props.beers.find((beer, i) => {
      console.log(beer);
      return beer._id === this.props.match.params.beerId;
    });
    console.log(theBeer);
    this.setState({ theBeer });
  };

  showTheRandomBeer = () => {
    console.log(this.state.theBeer);
    for (let i in this.state.theBeer) {
      return (
        <React.Fragment>
          <div className="col beers">
            <div className="row single">
              <img
                style={{ paddingTop: "10px", paddingBottom: "20px" }}
                height="300"
                src={this.state.theBeer.image_url}
                alt={this.state.theBeer.name}
              />
            </div>
            <div className="row single">
              <div className="col-9">
                <h2>{this.state.theBeer.name}</h2>
              </div>
              <div className="col-2">
                <h3 style={{ textAlign: "right" }}>
                  {this.state.theBeer.attenuation_level}
                </h3>
              </div>
            </div>

            <div className="row single">
              <div className="col-9">
                <blockquote>{this.state.theBeer.tagline}</blockquote>
              </div>
              <div className="col-2">
                <h6 style={{ textAlign: "right" }}>
                  {this.state.theBeer.first_brewed}
                </h6>
              </div>
            </div>

            <div className="row single">
              <p className="container">
                <b>Description: </b> {this.state.theBeer.description}
                <br />
              </p>
              <i style={{ paddingBottom: "5px" }}>
                Created by: {this.state.theBeer.contributed_by}
              </i>
            </div>
          </div>
        </React.Fragment>
      );
    }
  };

  render() {
    return <div className="beers">{this.showTheRandomBeer()}</div>;
  }
}

export default RandomBeer;