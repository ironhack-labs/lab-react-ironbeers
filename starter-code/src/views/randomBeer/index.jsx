
import React, { Component } from 'react';
// import Product from '../../components/Product';

// import { listProducts } from '../../services/product';

// import './style.scss';

import { random as loadRandom } from './../../services/beers';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: ""
    };
  };
  
  async componentDidMount() {
    try {
      const beer = await loadRandom(this.props.match.params.id);
      this.setState({
        beer
      });
    } catch (error) {
      console.log(error);
      console.log('Error in service.');
    }
  }
  
  render() {
    console.log(this.state.beer.name)
    return (
      <div className="card" style={{width: "18rem"}}>
      <img src={this.state.beer.image_url} class="card-img-top" alt="..."/>
      <div classNAme="card-body">
      <h5 className="card-title">{this.state.beer.name}</h5>
      <p className="card-text">{this.state.beer.tagline}</p>
      </div>
      </div>
      );
    }
  }

export default RandomBeer;