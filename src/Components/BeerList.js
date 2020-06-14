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
          <ul className="list-unstyled">
            {this.state.allBeers.map((b) => (
              <li className="media m-4" key={b._id}>

                  <img
                    className="thumbImage mr-5 "
                    src={b.image_url}
                  ></img>


                <div className="media-body align-self-center">
                  <h2 className="h3">{b.name}</h2>
                  <p>{b.tagline}</p>
                  <Link to={'/beers/' + b._id}>Go to Beer</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BeerList;
