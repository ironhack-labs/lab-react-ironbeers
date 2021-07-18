import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Beer extends Component {
  state = {
    beers: null,
    load: null,
  };

  // Make your /api/todos/:id requst here
  // check your server side routes to know the right url
  async componentDidMount() {
    try {
      let response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers`
      );
      console.log(response.data);

      this.setState({
        beers: response.data,
        load: 'loaded',
      });
    } catch (err) {
      console.log('Beer fetch failed', err);
    }
  }

  render() {
    const { beers, load } = this.state;
    if (load == 'loaded') {
      return beers.map((beer) => {
        return (
          <>
            <h1>Name :{beer.name}</h1>
            <img src={beer.image_url} alt="beerimg" />
            <p>Tagline : {beer.tagline}</p>
            <p>Contributed by : {beer.contributed_by}</p>
            <Link to={`/beer/${beer._id}`}>For More Details</Link>
          </>
        );
      });
    }

    return <div>Loading ...</div>;
  }
}
