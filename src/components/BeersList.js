import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



class BeersList extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }
  getAllBeers = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((responseFromApi) => {
      this.setState({ listOfBeers: responseFromApi.data });
    });
  };
  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listOfBeers.map((beer) => {
            return (
              //usamos map() para enumerar los proyectos (no olvides dar a cada elemento el ID de la base de datos
              //como clave con key = {project.\_id});
              <div key={beer._id}>
                <Link to={`beers/${beer._id}`}>
                  <h3>{beer.title}</h3>
                  </Link>
                  </div>
                  )})}
                  </div>
                  </div>
            )
            }
            
            };
  export default BeersList;