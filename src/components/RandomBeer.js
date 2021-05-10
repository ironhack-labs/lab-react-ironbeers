import React from 'react';
import BeersService from '../services/beers.service';

class RandomBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
    this.beersService = new BeersService();
  }

  getDetails() {
    const beerId = this.props.match.params.id;
    this.beersService
      .getRandomBeer(beerId)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((err) => console.error(err));
  }
  componentDidMount() {
    this.getDetails();
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.beer;

    return (
      <div>
        <img src={image_url} alt="image" />
        <p>Name: {name} </p>
        <p>{tagline}</p>
        <p>{first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
