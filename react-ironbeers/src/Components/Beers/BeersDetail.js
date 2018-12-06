import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class BeersDetail extends Component {
  constructor() {
    super();
  }
  getSingleBeer = () => {
    const { params } = this.props.match;
    console.log(params);
  };
  componentDidMount() {
    this.getSingleBeer();
  }
  render() {
    return (
      <div>hola</div>
    );
  }
}
