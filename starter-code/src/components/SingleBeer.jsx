import React, { Component } from "react";
import axios from "axios";

export default class SingleBeer extends Component {
  state = {
    singleBeer: []
  };

  getSingleBeer = () => {
    const { beerId } = this.props.match.params;
    console.log("beerId: ", beerId);
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${beerId}`)
      .then(response => {
        const singleBeer = response.data;
        console.log(response.data);
        this.setState({
          singleBeer: singleBeer
        });
      });
  };

  componentDidMount() {
    console.log("PAGE MOUNT");
    this.getSingleBeer();
  }

  render() {
    // const beer = this.state.singleBeer;
    console.log("State: ", this.state.singleBeer);
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px 0"
          }}
        >
          <div>
            {
              <img
                style={{ height: "200px" }}
                src={this.state.singleBeer.image_url}
              />
            }
          </div>

          <div>
            <strong>Name </strong>
            <p>{this.state.singleBeer.name}</p>
            <strong>Tagline </strong>
            <p>{this.state.singleBeer.tagline}</p>
            <strong>First Brewed </strong>
            <p>{this.state.singleBeer.first_brewed}</p>
            <strong>Attenuation Level </strong>
            <p>{this.state.singleBeer.attenuation_level}</p>
            <strong>Description </strong>
            <p style={{ width: "300px" }}>{this.state.singleBeer.description}</p>
            <strong>Contributed by </strong>
            <p>{this.state.singleBeer.contributed_by}</p>
          </div>
        </div>
        <hr></hr>
      </>
    );
  }
}
