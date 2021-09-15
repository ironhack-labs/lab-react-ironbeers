import React from 'react';
import axios from 'axios';
import Beer from '../beer/Beer';
import { Link } from 'react-router-dom';
import "./BeerList.css"

export default class BeerList extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        this.setState({ beer: res.data });
      })
      .catch(() => {
        console.log('Error');
      });
  }

  render() {
      if(!this.state.beer) {
          return (
            <h1 className="loading">Loading...</h1>)
      }
      return (
          <div className="BeerList">
              <div>
                  {this.state.beer.map(beer => (
                    <Link key={beer._id} className="BeerList_info" to={`/beers/${beer._id}`}>
                      <Beer key={beer._id} {...beer} />
                    </Link>
                  ))}
              </div>
          </div>
      )
  }
}