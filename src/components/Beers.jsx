import React from 'react';
import axios from 'axios';
import '../styles/Beers.css';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }

  render() {
    return this.state.beers.map((el) => (
      <div className="row" key={el._id}>
        <div className="col-sm-6">
          <div className="card">
            <Link to={`/beers/${el._id}`}>
              <img
                className="card-img-top mx-auto beers"
                src={el.image_url}
                alt={el.name}
              ></img>
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">{el.tagline}</p>
              <p>
                <small><strong>Created by:</strong> {el.contributed_by}</small>
              </p>
            </Link>
          </div>
        </div>
      </div>
    ));
  }
}

export default Beers;
