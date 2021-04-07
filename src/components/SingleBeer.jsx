import React, { Component } from 'react';
import Navbar from './Navbar';
import Beer from './Beer';
import { getBeer } from '../services/BaseService';

class SigleBeer extends Component {
  state = {
    beer: [],
    loading: true,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('id: ' + id);
    getBeer(id).then((beer) => this.setState({ beer, loading: false }));
  }

  render() {
    const {
      image_url,
      name,
      tagline,
      description,
      attenuation_level,
      first_brewed,
      contributed_by,
    } = this.state.beer;
    console.log(this.state.beer);
    return (
      <div className="">
        <Navbar />
        <div className="__cont">
          <h1>Beers</h1>
          <div className="__card-R __m-2">
            <img src={image_url} alt="beer" className='__w-a' />
            <div>
              <h1>{name}</h1>
              <h4>{tagline}</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SigleBeer;
