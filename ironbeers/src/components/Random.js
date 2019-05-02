import React, { Component } from 'react';
import axios from "axios";
var xd, xz;
function Nueva(){

    axios.get("http://localhost:5000/random" ).then(res => {
      xd = res.data.name;
      xz = res.data.image_url;
    });
}
export default class Random extends Component {
    constructor(props) {
        super(props);
        this.state = {
          birras: xd,
        };
      };

  misBirras() {
  }
  
  

      render() {
          Nueva()
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
