import React, { Component } from "react";
import apiHandler from "./../api/Handler";
import NavMain from "./../components/NavMain";


const api = new apiHandler("https://ih-beers-api2.herokuapp.com");

export default class BeerDetails extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    api
      .get(`/beers/${this.props.match.params.id}`)
      .then(apiRes => {
        this.setState({ beer: apiRes.data })
      })
      .catch(apiErr => console.error(apiErr));
  }

  render() {
    const { beer } = this.state;
    // YOU CAN PERFOM THE DEBUG LOGS HERE OR IN THE REACT DEVTOOLS CONSOLE
    console.log(this.props);

    return beer ? (
      <>
        <NavMain />
        <h1 className="title">Beer details</h1>
        <h2 className="title">{beer.name}</h2>
        <div>
          <img className="beerPicture" src={beer.image_url} alt="beer" />
          <ul className="beerInfos">
            <li>tagline : {beer.tagline}</li>
            <li>first brewed : {beer.first_brewed}</li>
            <li>attenuation level : {beer.attenuation_level}</li>
            <li>description : {beer.description}</li>
            <li>contributed_by : {beer.contributed_by}</li>
          </ul>
        </div>

      </>
    ) : (
        <p>... loading</p>
      );
  }
}
