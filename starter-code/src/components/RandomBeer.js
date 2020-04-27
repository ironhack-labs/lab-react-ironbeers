import React, { Component } from 'react';
import Header from "./Header";
import axios from "axios";

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class RandomBeer extends Component {
  state = {
    beer: {},
    status: STATUS.LOADING,
  };

  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        console.log(response.data);
        this.setState({
          beer: response.data,
          status: STATUS.LOADED,
        });
      })
      .catch((error) => {
        this.setState({
          status: STATUS.ERROR,
        });
      });
  }

  selectBeer = () => {
    const { beer } = this.state;
    if (beer !== undefined) {
      return (
        <div className='beer-detail'>
          <div className='beer-detail-container-img'>
            <img className="beer-img-detail" src={beer.image_url} alt={beer.name} />
          </div>

          <div className='info-detail'>
            <span className='beer-title'>
              {beer.name}
            </span>
            <span className='attenuation'>
              {beer.attenuation_level}
            </span>
          </div>
          <div className='info-detail'>
            <span className='tagline'>{beer.tagline}</span>
            <span className='brewed'>{beer.first_brewed}</span>
          </div>
          <p>
            {beer.description}
          </p>
          <p className='contributed'>{beer.contributed_by}</p>
        </div>
      )
    }
  }


  render(){
    const { status } = this.state;
    switch (status) {
      case STATUS.LOADED:
        return (
          <div>
            <Header />
            {this.selectBeer()}
          </div>
        );
      case STATUS.LOADING:
        return (
          <div>
            <Header />
            <div className="loader"></div>
          </div>
        )
      case STATUS.ERROR:
        return (
          <div>
            <Header />
            <p>ERROR</p>
          </div>
        )
    }
  }
}

export default RandomBeer;