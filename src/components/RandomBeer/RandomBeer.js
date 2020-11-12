import React from 'react';
// import axios from 'axios';
import PunkAPI from 'punkapi-javascript-wrapper';

import { Link } from 'react-router-dom';

class RandomBeer extends React.Component {
  state = {
    randomBeer: {},
  };

  componentDidMount() {
    // axios
    //   .get(
    //     `https://ih-beers-api2.herokuapp.com/beers/random`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({ beer: res.data });
    //   })
    //   .catch((err) => console.log(err));
    const punkapi = new PunkAPI();
    punkapi
      .getRandom()
      .then((beer) => {
        console.log(beer);
        this.setState({ randomBeer: beer[0] });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
      description,
      contributed_by,
    } = this.state.randomBeer;
    return (
      <div className="RandomBeer">
        <div>
          <Link to="/">&#8962;</Link>
        </div>
        <div>
          <img src={image_url} alt="name" />
          <div>
            <h2>{name}</h2>
            <span>{attenuation_level}</span>
          </div>
          <div>
            <h3>{tagline}</h3>
            <span>{first_brewed}</span>
          </div>
          <p>{description}</p>
          <span>{contributed_by}</span>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
