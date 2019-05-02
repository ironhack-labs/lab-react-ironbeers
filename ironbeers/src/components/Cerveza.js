import React, { Component } from 'react';
import axios from "axios";
var xd, xz;

export default class Cerveza extends Component {
    constructor(props) {
        super(props);
        this.state = {
          birras: undefined,
        };
      };

  misBirras() {
    axios.get("https://api.punkapi.com/v2/beers?beer_name=" + this.props.match.params.id).then(res => {
      xd = res.data[0].name;
      xz = res.data[0].image_url;

      this.setState({
        ...this.state,
        birras: xd
      });
    });
  }

      render() {


    this.misBirras();
        //   let miPais = this.state.movies.filter(patata => {
        //     return patata.name.common === this.props.match.params.id;
        //   });
    return (
      <div>
        {this.props.match.params.id}
        {xd}
        {xz}
      </div>
    )
  }
}
