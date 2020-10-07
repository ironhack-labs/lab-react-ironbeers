import React from 'react';
import axios from 'axios';
import Header from './Header';

class RandomBeer extends React.Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({
          beer: response.data,
        });
      });
  }

  render() {
    const beer = this.state.beer;
    if (!beer) {
      return null;
    }

    return (
      <div>
        <Header />
        <div className="card">
          <div className="text-center m-4">
            <img
              className="card-img-top"
              src={beer.image_url}
              alt="card"
              style={{ width: '50px' }}
            ></img>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-8">
                <h4 className="card-title">{beer.name}</h4>
              </div>
              <div className="col-4 text-right">
                <h3 style={{ color: '#999' }}>{beer.attenuation_level}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <h5 className="card-text" style={{ color: '#999' }}>
                  {beer.tagline}
                </h5>
              </div>
              <div className="col-4 text-right">
                <small>
                  <b>{beer.first_brewed}</b>
                </small>
              </div>
            </div>

            <p className="card-text mt-4">{beer.description}</p>

            <small className="card-text">
              <b>Created by: </b>
              {beer.contributed_by}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
