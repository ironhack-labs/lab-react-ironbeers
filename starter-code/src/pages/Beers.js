import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class Beers extends Component {

  printBeers = () => {
    const {beers} = this.props;
    return beers.map((item, index) => {
      return <Link key={index} className='beer-link' to={`/beers/${item._id}`}>
              <div className='beer-box' >
                <img className='beer-img' src={item.image_url} alt=""/>
                <div className='beer-description-box'>
                  <h2>{item.name}</h2> 
                  <p>{item.tagline}</p>
                  <p>Created by: {item.contributed_by}</p> 
                </div>
              </div>
              <hr/>
            </Link> 
    })
  }

  render() {
   return (
     <div>
      <Header />
      {this.printBeers()}
     </div>
    )
  }
}

export default Beers;