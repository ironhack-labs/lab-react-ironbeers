import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class BeerList extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      console.log(response.data);
      this.setState({
        allBeers: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="col text-center">
            <h4 className="display-4">All Beers</h4>
          </div>
        </div>
        <div className="container">

            {this.state.allBeers.map((b) => (
              <div className="row mb-3 border" key={b._id}>
                <div className="col-2 text-center">
                  <img
                    className="img-fluid thumbImage py-2"
                    src={b.image_url}
                  ></img>
                </div>

                <div className="col align-self-center">
                <div className="col">
                  <h2 className="h3">{b.name}</h2>
                  <p>{b.tagline}</p>
                  <Link to={'/beers/' + b._id}>Go to Beer</Link>
                </div>
                </div>
              </div>
            ))}

        </div>
      </div>
    );
  }
}

export default BeerList;
