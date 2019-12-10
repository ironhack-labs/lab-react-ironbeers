import React, { Component } from "react";
import { load as loadBeersService } from "./services/listBeers";
import Card from "react-bootstrap/Card";

class ViewBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  async componentDidMount() {
    try {
      const data = await loadBeersService();
      console.log(data);
      this.setState({
        beers: data
      });
    } catch (error) {
      console.log(error);
      console.log("Error in service.");
    }
  }

  render() {
    const beers = this.state.beers;
    console.log(beers);
    return (
      <div>
        <header>
          <a href="/">Home</a>
        </header>
        <div className="beerList">
          {beers &&
            beers.map(beer => (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={beer.image_url} />
                <Card.Body>
                  <Card.Title>{beer.name}</Card.Title>
                  <Card.Text>{beer.tagline}</Card.Text>
                  <p>Created by: {beer.contributed_by}</p>
                  <a href="/beers/:beerId">View Beer</a>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    );
  }
}

export default ViewBeers;

{
  /* <li key={id}><Link key={index} to={country}>{retrieveCountryFullName(country)}</Link></li>
   */
}
