import React from 'react';
import axios from 'axios';
import '../Beers/Beers.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

export default class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      const beers = res.data;
      this.setState({ beers });
    });
  }

  render() {
    return (
      <ul>
        <Navbar />
        {this.state.beers.map((beers) => (
          <li>
            <img src={beers.image_url} alt="beersimage"></img>
            <br />
            <div>
              <h2>
                <Link to={`/beers/${beers._id}`}>{beers.name}</Link>
              </h2>
            </div>
            <br />
            {beers.tagline}
            <br />
            {beers.contributed_by}
          </li>
        ))}
        ;
      </ul>
    );
  }
}
