import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beer: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response);
      this.setState({ beer: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container" key="card-beers">
        {this.state.beer.map((beerDetails) => {
          return (
            <Link to={`/all-beers/${beerDetails._id}`} key={beerDetails.name}>
              <div
                className="card mb-3 b-0 w-100 border-0 text-dark"
                style={{ maxWidth: '100%' }}
              >
                <div className="row g-0">
                  <div className="col-md-4 ">
                    <img
                      src={beerDetails.image_url}
                      style={{ width: '20%', height: '80%', marginTop: '20px' }}
                      alt="beer-image"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title mt-3">{beerDetails.name}</h5>
                      <p className="card-text">{beerDetails.tagline}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Created by: {beerDetails.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
