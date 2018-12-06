import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class OneBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ beer: res.data });
      });
  }

  render() {
    let singleBeer = this.state.beer;
    console.log(this.state.beer);
    if (this.state.beer !== null) {
      return (
        <div>
          <Header />
          <div className="beercontainer">
            <div className="imagecontainer">
              <img src={singleBeer.image_url} alt="" />
            </div>
            <div className="infocontainer">
              <h2>{singleBeer.name}</h2>
              <h2>{singleBeer.name}</h2>
              <h3>{singleBeer.tagline}</h3>
              <p>{singleBeer.contributed_by}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>LOADING...</h1>;
    }
  }
}
