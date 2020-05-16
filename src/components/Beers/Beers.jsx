import React, { Component } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './Beers.css';

export default class Beers extends Component {
  state = {
    apiResults: [],

  };

  componentDidMount() {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((result) => {
        this.setState({ apiResults: result });
      })
      .catch((e) => console.log(e));
  }

  handleQuery = (e) => {
    //console.log(e.target.value)
        fetch(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
          .then((response) => response.json())
          .then((result) => {
            this.setState({ apiResults: result });
          })
          .catch((e) => console.log(e));
  }

  render() {
    const apiResults = this.state.apiResults;

    return (
      <div>
        <Header />
        <div className="beers-container">
          <label htmlFor="search" className="beers-form-label">Search</label>
          <input name="search" className="beers-form-input" onChange={(e) => this.handleQuery(e)} />
          {apiResults.map((element) => (
            <Link key={element._id} to={{pathname: `/beers/${element._id}`, state: apiResults }}>
              <div className="beers-mainelement">
                <div className="beers-mainelement-img">
                  <img src={element.image_url} alt="" />
                </div>
                <div className="beers-item">
                  <h5>{element.name}</h5>
                  <p className="beers-item-tagline">{element.tagline}</p>
                  <p className="beers-item-contributed">
                    <strong>Created by:</strong>{' '}
                    {element.contributed_by.split('<')[0]}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
