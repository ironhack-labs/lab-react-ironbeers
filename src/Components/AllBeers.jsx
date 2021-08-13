import React, { Component } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        //console.log(res.data);
        this.setState({
          beers: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar />
        <main>
          {this.state.beers.map((beer) => {
            return (
              <div key={beer._id} style={{ display: 'flex' }}>
                <img src={beer.image_url} alt="" style={{ width: '30px' }} />
                <div>
                  <h2>
                    <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                  </h2>
                  <h3>{beer.tagline}</h3>
                  <p>{beer.first_brewed}</p>
                </div>
              </div>
            );
          })}
        </main>
      </div>
    );
  }
}

export default AllBeers;
