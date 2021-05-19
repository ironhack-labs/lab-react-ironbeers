import React from 'react';
import './Beers.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

import HomeLink from '../HomeLink/HomeLink';

export default class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        console.log(response.data);
        this.setState({ beers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="beers">
        <HomeLink />
        <ul className="beers-list">
          {this.state.beers.map((beer) => {
            return <BeerListItem key={beer._id} {...beer} />;
          })}
        </ul>
      </div>
    );
  }
}

function BeerListItem(props) {
  const { image_url, name, tagline, contributed_by } = props;
  return (
    <Link className="beers-list-item" to={`/beers/${props._id}`}>
      <img src={image_url} alt="Beer Image Missing" />
      <div>
        <h3>{name}</h3>
        <h4>{tagline}</h4>
        <p>
          <strong>Created by: </strong>
          {contributed_by}
        </p>
      </div>
    </Link>
  );
}
