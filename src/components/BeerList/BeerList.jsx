import React from 'react';
import axios from 'axios';
import BeerCard from '../BeerCard/BeerCard';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./BeerList.css"

export default class BeerList extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        console.log(res.data)
        this.setState({ beer: res.data });
      })
      .catch(() => {
        console.log('Error');
      });
  }

  render() {
      if(!this.state.beer) {
          return (
            <Loader type="Oval" className='Loader' color="#3dc4fc" height={100} width={100} />)
      }
      return (
          <div className="BeerList">
              <div>
                  {this.state.beer.map(beer => (
                      <BeerCard key={beer._id} {...beer} />
                  ))}
              </div>
          </div>
      )
  }
}

