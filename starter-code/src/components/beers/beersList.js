import React,{Component} from "react";
import Service from "../../service/ironBeers.service";

//import { Container, Row, Button, Modal } from "react-bootstrap";

import BeersCard from "./beersCard";


class BeerList extends Component {
  constructor() {
    super();
    this._service = new Service();
    this.state = {
      beers: [],
     
    };
  }

  componentDidMount = () => this.updateBeersList();

  updateBeersList = () => {
    this._service
      .getAllBeers()
      .then(allBeersFromDB =>
        this.setState({ beers: allBeersFromDB.data })
      )
      .catch(err => console.log("Error", err));
  };


  render() {
    return (
      <section>
        <div >
          <h1>All our Beers</h1>
        
            {this.state.beers.map(beers => (
              <BeersCard key={beers._id} {...beers} />
            ))}
          
        </div>
      </section>
    );
  }
}

export default BeerList;
