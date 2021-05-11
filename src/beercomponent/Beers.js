import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    console.log('ALL Beers constructor', props);
    this.state = {
      beers: [],
      query: '',
      error: false,
    };
  }
  getBeers(URL) {
    axios
      .get(URL)
      .then((resp) =>
        this.setState({
          beers: resp.data,
        })
      )
      .catch((error) => {
        this.setState({
          error: true,
        });
      })
      .finally(() => {
        setTimeout(() => this.setState({ error: false }), 1000);
      });
  }

  componentDidMount() {
    console.log('ALL Beers componentDidMount');
    this.getBeers('https://ih-beers-api2.herokuapp.com/beers');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('ALL Beers componentDidUpdate UPDATE');
    console.log(prevState.query, this.state.query);
    if (prevState.query !== this.state.query) {
      console.log('RUN AXIOS AGAIN');
      const URL =
        this.state.query.length > 0
          ? `https://ih-beers-api2.herokuapp.com/beers/query?q=${this.state.query}`
          : 'https://ih-beers-api2.herokuapp.com/beers';

      this.getBeers(URL);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const errorHappened = this.state.error && (
      <div className="alert alert-danger" role="alert">
        An error occured!!!
      </div>
    );

    if (this.state.beers.length === 0) return <h3>Loading...</h3>;

    console.log('ALL Beers render');
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="form-group">
            <label htmlFor="query">Filter: </label>
            <input
              className="form-control"
              type="text"
              name="query"
              id="query"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>
          {errorHappened}
        </div>
        <div className="row">
          {this.state.beers.map((beer) => (
            <div
              className="card col-lg-2 col-md-3 col-sm-6 m-1 flex-grow-1"
              key={beer._id}
            >
              <div className="card-horizontal">
                <div className="img-square-wrapper">
                  <img className="" src={beer.image_url} alt={beer.name} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{beer.name}</h4>
                  <p className="card-text">{beer.tagline}</p>

                  <Link className="btn btn-info" to={`/beers/${beer._id}`}>
                    Details
                  </Link>
                </div>
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  Created by: {beer.contributed_by}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
