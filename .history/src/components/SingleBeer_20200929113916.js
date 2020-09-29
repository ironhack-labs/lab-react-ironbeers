import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';

class SingleBeer extends Component {
  state = {
    beer: {},
  };

  getSingleBeer = (id) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        this.setState({ beer: response.data });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getSingleBeer(
      this.props.match ? this.props.match.params.id : this.props.id
    );
  }

  render() {
    const beer = this.state.beer;
    if (!beer) return <div>Loading...</div>;
    return (
      <Fragment>
        <Nav />
        <section className="page single">
          <figure>
            <img src={beer.image_url} height={450} alt={beer.name} />
          </figure>
          <article>
            <header>
              <h3>{beer.name}</h3>
              <span>{beer.attenuation_level}</span>
            </header>
            <aside>
              <blockquote>{beer.tagline}</blockquote>
              <span>{beer.first_brewed}</span>
            </aside>
            <p>{beer.description}</p>
            <br />
            <small>{beer.contributed_by}</small>
          </article>
        </section>
        {this.props.match && (
          <div className="btn-back">
            <Link to={`/beers`}>Back to beer list</Link>
          </div>
        )}
      </Fragment>
    );
  }
}

export default SingleBeer;
