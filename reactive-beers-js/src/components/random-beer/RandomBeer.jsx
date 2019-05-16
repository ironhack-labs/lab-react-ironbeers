import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from '../navbar/Navbar'

class RadomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  // Chamando a API e obetendo as cervejas dentro de um array
  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
      this.setState({
        beers: response.data[Math.floor(Math.random() * response.data.length)]
      });
      console.log(this.state.beers);
    });
  }

  render() {

    const { image_url, name, tagline, contributed_by} = this.state.beers;
    return (
      <div className="conteiner">
       <Navbar />
        <img src={image_url} alt="imagem"/>
        <p>{name}</p>
        <p>{tagline}</p>
        <p>{contributed_by}</p>
      </div>
    );
  }
}

export default RadomBeer;
