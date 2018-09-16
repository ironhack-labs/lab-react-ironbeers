import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount = () => {
    axios
      .get('https://ironbeer-api.herokuapp.com/beers/all')
      .then(res => {
        console.log(res.data);
        this.setState({
          beers: res.data
        });
      })
      .catch(err => console.log(err, 'Could not get all beers'));
  };

  render() {
    return (
      <div>
        {this.state.beers.map(beer => {
          return (
            <div key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt="" />
              </Link>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Created By: {beer.contributed_by}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
