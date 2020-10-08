import React, { Component } from 'react';
import BeerApi from '../api/BeerApi';
import NavMain from '../components/NavMain';

export default class OneBeer extends Component {
  state = {
    beer: null,
  };

  async componentDidMount() {
    try {
      const beer = await BeerApi.getOne(this.props.match.params.id);
      this.setState({ beer: beer.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const beer = this.state.beer;
    console.log(beer);
    return (
      <div>
        <NavMain />
        {beer && (
          <div className='one-beer-container'>
            <img className='medium-img' src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        )}
      </div>
    );
  }
}
