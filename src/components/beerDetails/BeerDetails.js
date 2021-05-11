import React, { Component } from 'react';
import BeerServices from '../../services/beers.services';
import Header from '../header/Header';


export default class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
    this.beerService = new BeerServices();
  }

  refreshState() {
    this.beerService
      .getOne(this.props.match.params.id)
      .then(( response ) => {
        this.setState({ beer: response.data });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.refreshState();
  }

  render() {
    const { image_url, name, tagline, contributed_by, first_brewed, attenuation_level, description } = this.state.beer
    return (
      <div>
        <Header />
        
        <div>
          <img src={image_url} width="100px" alt={name}></img>
          <h3>{name}</h3>
          <h4>{tagline}</h4>
          <p>{first_brewed}</p>
          <p>{attenuation_level}</p>
          <p>{description}</p>
          <p>{contributed_by}</p>
        </div>
      </div>
    );
  }
}
