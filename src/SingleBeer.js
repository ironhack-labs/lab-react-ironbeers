import React from 'react';
import axios from 'axios';

const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';

export default class SingleBeer extends React.Component {
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
    const filteredBeer = this.state.beerData.filter(
      (beer) => beer._id === this.beerId
    );
        console.log(filteredBeer)
    return (
        filteredBeer.map((beer) => 
        <>
        <img src={beer.image_url} alt={filteredBeer.name} />
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </>)
    );
  }
}