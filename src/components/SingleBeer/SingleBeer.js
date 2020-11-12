import React from 'react';
// import axios from 'axios';
import PunkAPI from 'punkapi-javascript-wrapper';

import { Link } from 'react-router-dom';

class SingleBeer extends React.Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    // axios
    //   .get(
    //     `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.beerId}`
    //   )
    //   .then((res) => {
    //     console.log(res.data);
    //     this.setState({ beer: res.data });
    //   })
    //   .catch((err) => console.log(err));
    const punkapi = new PunkAPI();
    punkapi
      .getBeer(this.props.match.params.beerId)
      .then((beer) => {
        console.log(beer);
        this.setState({ beer: beer[0] });
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
    } = this.state.beer;
    return (
      <div className="SingleBeer">
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

export default SingleBeer;
