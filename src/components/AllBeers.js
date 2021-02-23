import React from 'react';
import axios from 'axios';

class AllBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      const beers = response.data;
      this.setState({ beers });
    });
  }
  beersAll = (e) => {
    const listBeers = this.state.beers.map((b) => (
      <div key={b.key}>
        <img src={b.image_url} alt="beers" />
        <div>
          <h1>{b.name}</h1>
          <p>{b.tagline}</p>
          <b>Created by: {b.contributed_by}</b>
        </div>
      </div>
    ));


    return listBeers;
  };

  render() {
    return <div>{this.beersAll()}</div>;
  }
}

export default AllBeers;