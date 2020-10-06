import React from 'react';
import { isElementOfType } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import { getAllBeers } from '../../services/Services';
import NavBar from '../NavBar/NavBar';
import './AllBeers.css';

class AllBeers extends React.Component {
  state = {
    allBeers: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    getAllBeers()
      .then((response) => {
        this.setState({ allBeers: response });
      })
      .catch((err) => console.log('error in beers list ', err));
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container div-container">
          {this.state.allBeers.map((beer) => {
            return (
              <>
                <div key={beer._id} className="beer-item">
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={'/beers/' + beer._id}
                  >
                    <div className="beer-img-card">
                      <img className="beer-image" src={beer.image_url} />
                    </div>
                  </Link>

                  <div className="beer-card-text">
                    <h5>{beer.name}</h5>
                    <p>
                      <span className="tagline">{beer.tagline}</span>
                      <br />
                      <span className="createdBy">
                        <b>Created by: </b>
                        {beer.contributed_by}
                      </span>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllBeers;
