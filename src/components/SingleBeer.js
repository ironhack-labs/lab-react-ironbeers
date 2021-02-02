import React, { Component } from 'react';
import Header from './Header';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    };
  }

  componentDidMount() {
    const endPoint = this.props.isRandom ? "random" : this.props.match.params.beerId;
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${endPoint}`)
      .then(res => res.json())
      .then(beer => {
        this.setState({
          beer: {
            image: beer.image_url,
            name: beer.name,
            tagline: beer.tagline,
            firstBrew: beer.first_brewed,
            attenuation: beer.attenuation_level,
            description: beer.description,
            contributor: beer.contributed_by,
          }
        })
      })
  }

  render() {
    if(!this.state.beer) {
      return (
        <p>Sorry no data</p>
      )
    }

    const {
      image,
      name,
      tagline,
      firstBrew,
      attenuation,
      description,
      contributor,
    } = this.state.beer;

    return (
      <>
        <Header />
        <div>
          <img src={image} alt={name} />
          <div>
            <h2>{name}</h2>
            <span>{attenuation}</span>
          </div>
          <div>
            <p>{tagline}</p>
            <span>{firstBrew}</span>
          </div>
          <p>{description}</p>
          <span>{contributor}</span>
        </div>
      </>
    )
  }
}

