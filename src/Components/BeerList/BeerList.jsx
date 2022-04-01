import React, { Component } from 'react';
import axios from 'axios';
import './BeerList.css';

class BeerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      beers: [],
    };

    this.debounce = null;
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
          beers: response.data,
        });
      })
      .catch((err) => console.err(err));
  }

  render() {
    const { loading, beers } = this.state;

    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          beers.map((beer) => (
            <div key={beer.id}>
              <div className="card">
                <div className="card-img">
                  <img
                    className="beer-img"
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </div>
                <div className="card-content">
                  <h1>{beer.name}</h1>
                  <h3>{beer.tagline}</h3>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default BeerList;
