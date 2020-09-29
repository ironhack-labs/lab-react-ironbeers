import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function Search(props) {
  return (
    <Fragment>
      <span role="img" aria-label="search">
        👓{' '}
      </span>
      <input
        type="text"
        name="search"
        id="search"
        value={props.query}
        onChange={props.handleChange}
      />
    </Fragment>
  );
}

class ListBeers extends Component {
  state = {
    beers: [],
    query: '',
  };

  getAllBeers() {
    const query = this.state.query ? '/search?q=' + this.state.query : '';

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers${query}`)
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  componentDidUpdate(prevProps, prevState) {
    this.getAllBeers();
  }

  render() {
    if (!this.state) return <div>Filling the barrels...</div>;

    return (
      <Fragment>
        <Nav />
        <Search query={this.state.query} handleChange={this.handleChange} />
        <section className="page">
          {this.state.beers.map((beer) => {
            return (
              <div key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <figure>
                    <img src={beer.image_url} alt={beer.name} />
                  </figure>
                  <article>
                    <h2>{beer.name}</h2>
                    <blockquote>{beer.tagline}</blockquote>
                    <p>Created by: {beer.contributed_by}</p>
                  </article>
                </Link>
                <hr />
              </div>
            );
          })}
        </section>
      </Fragment>
    );
  }
}

export default ListBeers;
