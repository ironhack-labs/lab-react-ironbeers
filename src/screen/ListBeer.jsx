import React from 'react';
import NavBar from '../components/Navbar';
import '../stylesheets/ListBeer.css';
import { allBeer } from '../services/api-client';
import { Link } from 'react-router-dom';

export default class ListBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: null
    };
  }

  componentDidMount() {
    allBeer().then((res) =>
      this.setState({
        beers: res,
      })
    );
  }

  render() {
    if (this.state.beers === null) {
      return (
        <div>
          <NavBar />
          <div className="container">
            <div className="alert alert-warning mt-5">Loading...</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        <div className="container">
          <ul className="list-group mb-5">
            {this.state.beers.map((beer, index) => {
              return (
                <li key={index} className="list-group-item beer-item">
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    className="float-left img-description"
                  />
                  <div className="beer-description">
                    <Link
                      to={`/beers/${beer._id}`}
                      className="text-decoration-none text-dark"
                    >
                      <h3 className="h3"> {beer.name} </h3>
                    </Link>
                    <h6 className="text-secondary"> {beer.tagline} </h6>
                    <div>
                      <b> Created by: </b> {beer.contributed_by}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
