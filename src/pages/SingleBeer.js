import React from "react";
import { getData } from "../lib/getData.js";

export default class SingleBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    getData(`single/${this.props.match.params.id}`).then(data => {
      this.setState({ data });
    });
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          {this.state.data ? (
            <div>
              <img src={this.state.data.image_url} alt="beer"/>
            <p>{this.state.data.name}</p>
            <p>{this.state.data.tagline}</p>
            <p>{this.state.data.first_brewed}</p>
            <p>{this.state.data.attenuation_level}</p>
            <p>{this.state.data.description}</p>
            <p>{this.state.data.contributed_by}</p>
            </div>
          ) : (
            <div className="pageloader is-warning"><span className="title">Loading</span></div>
          )}
        </div>
      </div>
    );
  }
}
