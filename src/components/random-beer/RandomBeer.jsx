import axios from 'axios';
import React from 'react';
import Navbar from '../navbar/Navbar';
import { Link } from 'react-router-dom';

class RandomBeer extends React.Component {
  state = {
    randomBeer: {},
  };

  componentDidMount() {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(beer => this.setState({ randomBeer: beer.data }))
        .catch(error => console.error(error))
  }

  render() {
      const { randomBeer } = this.state;
    return (
        <div>
        <Navbar />
        <div className="container">
            <div className="row my-3 align-items-center">
              <div className="col-12 col-lg-3 d-flex justify-content-center">
                <img style={{ width: '6rem' }} src={randomBeer.image_url} alt={randomBeer.name} />
              </div>
              <div className="col-12 col-lg-9 my-3">
                <div className="d-flex justify-content-between">
                    <h2>{randomBeer.name}</h2>
                    <p className="text-muted fw-bold fs-4">{randomBeer.attenuation_level}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="text-muted">{randomBeer.tagline}</h5>
                    <p className="text-muted fw-bold fs-4">{randomBeer.first_brewed}</p>
                </div>
                <p className="fw-bold">{randomBeer.description}</p>
                <p className="text-muted fw-bold">{randomBeer.contributed_by}</p>
                <Link className="btn btn-primary my-5" to='/beers'>Back to Beers</Link> 
              </div> 
            </div>
        </div>
      </div>
    )
  }
}

export default RandomBeer;
