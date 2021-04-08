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
    getBeer(id).then((beer) => this.setState({ beer, loading: false }));
  }

  render() {
    const {beer } = this.state;
    return (
      <div className="">
          <Navbar />
          <Beer {...beer}/>
      </div>
    );
  }
}

export default SigleBeer;
