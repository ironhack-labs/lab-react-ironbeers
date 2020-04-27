import React, {Component} from 'react';
import {withBeer} from '../context/BeerContext';
import Header from "../components/Header";
import BeerView from "../components/BeerView";
import axios from "axios";

const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

class Beer extends Component {

  state =  {
    beer: undefined,
    status: STATUS.LOADING
  };

  getBeerById(beers, beerId) {
    return beers.filter(beer => beer._id === beerId);
  }

  componentDidMount() {
    const {match : {params : {dataId = undefined} = {}} = {}} = this.props;

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        this.setState({
          beer: this.getBeerById(res.data, dataId)[0],
          status: STATUS.LOADED
        });
      })
      .catch(err => {
        this.setState({
          status: STATUS.ERROR
        });
      });
  }


  render() {
    const {beer, status} = this.state;
    console.log(beer);
    return (
      <div className={'beerPage'}>
        <Header/>
        {status === STATUS.LOADED &&<BeerView {...beer}/>}
        {status === STATUS.LOADING &&
        <div className={'loading'}>
          <img src="/images/spinner.gif" alt=""/>
        </div>}
        {status === STATUS.ERROR && <p>ERROR!</p>}
      </div>
    );
  }
}

export default Beer;