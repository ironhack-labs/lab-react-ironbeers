import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class Beers extends Component {

  state = {
    beers: '',
    error: undefined,
    status: STATUS.LOADING,
  }
  
  componentDidMount = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then((response) => {
      console.log(response.data)
      this.setState({
        beers: response.data,
        status: STATUS.LOADED,
      })
    })
    .catch((error) => {
      this.setState({
        error: error.name,
        status: STATUS.ERROR,
      })
    })
  }

  printBeers = () => {
    const {beers} = this.state;
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
    const { error, status } = this.state;
 
    // eslint-disable-next-line default-case
    switch (status) {
      case STATUS.LOADING:
        return <div>Loading...</div>
      case STATUS.LOADED:
        return <div><Header /> {this.printBeers()} </div>
      case STATUS.ERROR:
        return <div>{error}</div>
    }
  }
}

export default Beers;