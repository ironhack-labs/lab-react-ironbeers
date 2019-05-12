import React, { Component } from 'react';
import axios from 'axios';

import './index.css';

class BeerDetails extends Component {
  state = { beer: null };

  componentDidMount() {
    const { id } = this.props.match.params;
    let endpoint;

    if (id) {
      endpoint = `https://ih-beer-api.herokuapp.com/beers/${id}`;
    } else {
      endpoint = 'https://ih-beer-api.herokuapp.com/beers/random';
    }

    axios.get(endpoint).then(response => {
      const { data: beer } = response;

      this.setState({ beer });
    });
  }

  render() {
    const { beer } = this.state;

    if (!beer) return null;

    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by
    } = beer;

    return (
      <section>
        <article>
          <figure className="thumb">
            <img src={image_url} alt={name} />
          </figure>
        </article>
        <article className="columns is-mobile">
          <div className="column has-text-centered">
            <h1 className="title">{name}</h1>
            <h2 className="subtitle">{tagline}</h2>
          </div>
          <div className="column is-4">
            <h2 className="title">{attenuation_level}</h2>
            <h2 className="subtitle">{first_brewed}</h2>
          </div>
        </article>
        <article>
          <p>{description}</p>
          <p>
            <strong>{contributed_by}</strong>
          </p>
        </article>
      </section>
    );
  }
}

export default BeerDetails;
