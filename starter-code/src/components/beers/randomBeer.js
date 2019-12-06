import React, { Component } from "react";
import Service from "../../service/ironBeers.service";

//import { Container, Row, Button, Modal } from "react-bootstrap";



class RandomBeer extends Component {
  constructor() {
    super();
    this._service = new Service();
    this.state = {
      beer: {}
    };
  }

  componentDidMount = () => this.updateBeersList();

  updateBeersList = () => {
    this._service
      .getAllBeers()
      .then(allBeersFromDB => {
          let rand=Math.floor(Math.random()*allBeersFromDB.data.length)
          let randomB = allBeersFromDB.data[rand] 
          
        console.log(rand);
        this.setState({ beer: randomB })})
      .catch(err => console.log("Error", err));
    };
    
    render() {
        return (
          <section>
            <img src={this.state.beer.image_url} alt={this.state.beer.name} />
            <h3>{this.state.beer.name}</h3>
            <p>{this.state.beer.description}</p>
          </section>
        );
  }
}

export default RandomBeer;
