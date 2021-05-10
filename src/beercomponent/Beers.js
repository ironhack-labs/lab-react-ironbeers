import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    console.log('ALL Beers constructor', props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    console.log('ALL Beers componentDidMount');
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((resp) =>
        this.setState({
          beers: resp.data,
        })
      )
      .catch((error) => console.error(error));
  }

  render() {
    if (this.state.beers.length === 0) return <h3>Loading...</h3>;

    console.log('ALL Beers render');
    return (
      <div className="container">
        <div className="row">
          {this.state.beers.map((beer) => (
            <div className="card col-lg-2 col-md-3 col-sm-6 m-1" key={beer._id}>
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
