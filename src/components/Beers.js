import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loaded: false,
      query: ""
    };
    this.inputHandler = this.inputHandler.bind(this);
  }

  // use fetch
  async componentDidMount() {
    const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
    const json = await response.json();
    this.setState(() => ({ beers: json, loaded: true }));
  }

  // use axios
  async inputHandler(event) {
      const query = event.target.value;
      this.setState(() => ({query: query}));
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`);
      this.setState(() => ({beers: response.data}));
  }

  render() {
    const beersRender = this.state.beers.map((beer) => {
      return (
        <div key={beer._id}>
          <div className="d-flex mb-3">
            <div className="beerImg-container d-flex justify-content-center">
              <img className="beer-img" src={beer.image_url} alt={beer.name} />
            </div>
            <div className="ml-1 text-left d-flex flex-column justify-content-center">
              <Link to={`/beers/${beer._id}`}>
                <h4 className="m-0 pb-3">{beer.name}</h4>
              </Link>
              <h5 className="m-0 text-muted font-weight-normal pb-1">
                {beer.tagline}
              </h5>
              <p className="m-0">
                <b>Created by:</b>{' '}
                {beer.contributed_by
                  ? beer.contributed_by.replace(/\s*\<.*?\>\s*/g, '')
                  : 'Unknown'}
              </p>
            </div>
          </div>
          <hr />
        </div>
      );
    });
    return (
        <div className="container">
            <div className="input-group mb-3">
                <span className="input-group-text" id="query">
                    Beer Search
                </span>
                <input
                type="text"
                name="query"
                className="form-control"
                aria-label="query"
                aria-describedby="basic-addon1"
                value={this.state.query}
                onChange={this.inputHandler}
                />
            </div>
            {beersRender}
        </div>
    );
  }
}

export default Beers;
