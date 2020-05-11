import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

class BeerId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    // console.log(this.props.match.params.id);
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((apiResponse) => {
        console.log(apiResponse.data);
        this.setState({ beer: apiResponse.data });
      })
      .catch((error) => {});
  }
  render() {
    return <div></div>;
  }
}

export default BeerId;
