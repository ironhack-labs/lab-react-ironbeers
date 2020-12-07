import React from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';

class Listbeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      console.log(res);
      const beers = res.data;
      this.setState({ beers });
    });
  }

  render() {
    return (
      <div>
        <h1> Here you can find all the beers </h1>

        {this.state.beers.map((beer, index) => (
          <section className="homecard">
            <img src={beer.image_url} alt="" />
            <h2 key={index}>
              <Link to={`/beers/${beer.name}`}> {beer.name} </Link>
            </h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </section>
        ))}
      </div>
    );
  }
}

export default Listbeers;
