import React, { Component } from "react";
import Service from "../../service/ironBeers.service";
import { Link } from "react-router-dom";
//import { Container, Row, Button, Modal } from "react-bootstrap";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      beer: {}
    };
  }

  componentDidMount = () => {
    const beerId = this.props.match.params.id;
    this._service
      .getOneBeer(beerId)
      .then(theBeer => this.setState({ beer: theBeer.data }))
      .catch(err => console.log(err));
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

export default BeerDetails;
