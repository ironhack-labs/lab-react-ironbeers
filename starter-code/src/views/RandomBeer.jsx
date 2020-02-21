import React, { Component } from "react";
import apiHandler from "./../api/Handler";
import NavMain from "./../components/NavMain";

const api = new apiHandler("https://ih-beers-api2.herokuapp.com");

export default class BeerDetails extends Component {
  state = {
    randomBeer: null,
    APIurl: "https://ih-beers-api2.herokuapp.com/beers/random"
  };


  componentDidMount() {
    api
      .get(`/beers/random`)
      .then(apiRes => {
          this.setState({ randomBeer: apiRes.data })})
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    const { randomBeer } = this.state;
    // YOU CAN PERFOM THE DEBUG LOGS HERE OR IN THE REACT DEVTOOLS CONSOLE
    console.log(this.props);

    return randomBeer ? (
      <>
      <NavMain />
        <h1 className="title">Beer details</h1>
        <h2 className="title">{randomBeer.name}</h2>
        <div>
        <img className="beerPicture" src={randomBeer.image_url} alt="beer" />
        <ul className="beerInfos">
            <li>tagline : {randomBeer.tagline}</li>
            <li>first brewed : {randomBeer.first_brewed}</li>
            <li>attenuation level : {randomBeer.attenuation_level}</li>
            <li>description : {randomBeer.description}</li>
            <li>contributed_by : {randomBeer.contributed_by}</li>
        </ul>
        </div>

      </>
    ) : (
      <p>... loading</p>
    );
  }
}
