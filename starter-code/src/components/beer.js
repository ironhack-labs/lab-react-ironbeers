import React from "react";
import Service from "../service/beer.service"
import BeerCard from "./BeerCard"
import { Container, Row, Col } from "react-bootstrap";






class Beer extends React.Component {
  constructor() {
    super();
    this._service = new Service();
    this.state = {
      beerlist: [{}]
    };
  }

  componentDidMount = () => this.updateBeerList();

  updateBeerList = () => {
    this._service
      .getAllBeer()
      .then(allBeerFromDB => this.setState({ beerlist: allBeerFromDB.data }))
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Beer List</h1>
          <Row>
            {this.state.beerlist.map(beer => (
              <BeerCard key={beer._id} {...beer} />
            ))}
          </Row>
        </div>
      </div>
    );
  }
};
export default Beer;
