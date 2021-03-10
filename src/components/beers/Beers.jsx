import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((beers) => {
        this.setState({ beers: beers.data });
        console.log(this.state.beers);
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          {beers.map((beer, i) => (
            <div key={i} className="row my-3 align-items-center">
              <div className="col-3">
                <img style={{ width: '6rem' }} src={beer.image_url} alt="" />
              </div>
              <div className="col-9">
                <h2 className="fw-bold">{beer.name}</h2>
                <h5 className="text-muted">{beer.tagline}</h5>
                <p><b>Created by:</b> <span>{beer.contributed_by}</span></p>
                <Link className="btn btn-primary" to={`/beers/${beer._id}`}>Details</Link>
              </div> 
              <hr className="my-3"/>
            </div>    
          ))}
        </div>
      </div>
    );
  }
}

export default Beers;
