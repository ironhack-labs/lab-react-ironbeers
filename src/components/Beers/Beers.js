import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log(res);
        this.setState({ beers: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="Beers">
        <div>
          <Link to="/">&#8962;</Link>
        </div>
        <div>
          {this.state.beers.map((beer) => {
            return (
              <Link to={`/beers/${beer._id}`}>
                <div key={beer._id}>
                  <img src={beer.image_url} alt={beer.name} />
                  <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Created by: {beer.contributed_by}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
