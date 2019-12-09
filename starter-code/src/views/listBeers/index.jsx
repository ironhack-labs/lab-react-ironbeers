import React, { Component } from 'react';
// import Product from './../../components/Product';
import { Link } from "react-router-dom";

// import { listProducts } from './../../services/product';

import { load as loadBeers } from './../../services/beers';

import './style.css';

class ListBeers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
    // listProducts()
    //   .then(products => {
    //     this.setState({
    //       products: products
    //     });
      // })
      // .catch(error => {
      //   console.log(error);
      // });
  }

  async componentDidMount() {
    try {
      const beers = await loadBeers();
      console.log(beers);
      this.setState({
        beers
      });
    } catch (error) {
      console.log(error);
      console.log('Error in service.');
    }
  }

render() {
  const beers = this.state.beers;
  console.log("beers", beers)
  return (
    <div className = "App">
    <h1>Beers list</h1>
    <div className="products">
    {beers.map((val) => {
      return <div className ="card" style={{width: "15rem"}}>
      <img src={val.image_url} class="card-img-top image" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{val.name}</h5>
      <p className="card-text">{val.tagline}</p>
      <Link to={`/beer/${val._id}`} className="btn btn-primary">Add Beer</Link>
      </div>
      </div>
    })}

    </div>
    </div>
    );
  }
}

export default ListBeers;