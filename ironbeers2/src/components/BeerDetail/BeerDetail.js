import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import "./BeerDetail.css";

export default class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
      .then(responseFromApi => {
        const beer = responseFromApi.data;
        console.log(beer);
        this.setState({ beer });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.beer);

    return (
      <ListGroup>
        <ListGroupItem>
          <img src={this.state.beer.image_url} />
        </ListGroupItem>
        <ListGroupItem>
          <div className="title-section">
            <div className="first-title">
              <h1>{this.state.beer.name}</h1>
              <p>{this.state.beer.tagline}</p>
            </div>
            <div className="second-title">
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.first_brewed}</p>
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className='description-beer'>
            <p>{this.state.beer.description}</p>
          </div>
          <p>{this.state.beer.contributed_by}</p>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
