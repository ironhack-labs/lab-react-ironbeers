import React, { Component } from 'react';
import Header from './Header';
import { api } from '../api-config';

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerData: {},
    };
  }

  componentDidMount() {
    api
      .get('/beers/' + this.props.match.params.beerId)
      .then((response) => {
        this.setState(() => ({ beerData: response.data }));
      })
      .catch((err) => 'Error while trying to retrive the beer data' + err);
  }

  render() {
    const beer = this.state.beerData;
    return (
      <div>
        <Header />
        <div className="singleBeerImg">
          <img src={beer.image_url} alt={beer.name} />
        </div>
        <div className="singleBeerData">
          <div>
            <h4 className="text-spread">
              <span>{beer.name}</span>
              <span className="gray">{beer.attenuation_level}</span>
            </h4>
          </div>
          <div>
            <h5 className="text-spread">
              <span className="gray">{beer.tagline}</span>
              <span className="smaller">{beer.first_brewed}</span>
            </h5>
          </div>
          <div>
            <p>{beer.description}</p>
          </div>
          <div>
            <p className="align gray">{beer.contributed_by}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
