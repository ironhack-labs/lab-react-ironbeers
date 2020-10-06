import React from 'react';
import axios from 'axios';

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers/random';

export default class RandomBeer extends React.Component {

  constructor(props) {
    super(props);
    this.beerId = props.match.params.beerId;
    this.state = {
      beerData: [],
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        this.setState({
          beerData: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {

    return (

        <>
        <img src={this.state.beerData.image_url} alt={this.state.beerData.name} />
        <p>{this.state.beerData.name}</p>
        <p>{this.state.beerData.tagline}</p>
        <p>{this.state.beerData.first_brewed}</p>
        <p>{this.state.beerData.attenuation_level}</p>
        <p>{this.state.beerData.description}</p>
        <p>{this.state.beerData.contributed_by}</p>
      </>
    );
  }
}