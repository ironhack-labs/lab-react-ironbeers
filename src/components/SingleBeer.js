import React, { Component } from 'react';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null
    }
  }

  componentDidMount() {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`)
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
    const beer = this.state.beer;
    if(!beer) {
      return (
        <p>Sorry no data</p>
      )
    }

    return (
      <div>
        <img src={beer.image} />
      </div>
    )
  }
}

