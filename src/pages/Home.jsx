import React, { Component } from 'react';
import '../home.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {

  componentDidMount(){
    this.props.getCurrentPath(this.props.match.path);
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/beers" className="nav-link">
          <img
            className="nav-img"
            src="/images/all_beers.jpg"
            alt="All beers"
          />
          <h2 className="primary-color">All beers</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            accusamus quia autem, maxime laborum culpa laboriosam molestias
            repellat odio voluptas.
          </p>
        </Link>
        <Link to="/random-beer" className="nav-link">
          <img
            className="nav-img"
            src="/images/rand_beer.jpg"
            alt="Random beer"
          />
          <h2 className="primary-color">Random beer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            accusamus quia autem, maxime laborum culpa laboriosam molestias
            repellat odio voluptas.
          </p>
        </Link>
        <Link to="/new-beer" className="nav-link">
          <img className="nav-img" src="/images/new_beer.jpeg" alt="New beer" />
          <h2 className="primary-color">New beer</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            accusamus quia autem, maxime laborum culpa laboriosam molestias
            repellat odio voluptas.
          </p>
        </Link>
      </React.Fragment>
    );
  }
}
