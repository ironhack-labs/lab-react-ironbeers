import React, {Component} from 'react';
import Header from "../components/Header";
import {withBeers} from '../context/BeerContext';
import BeerRow from "../components/BeerRow";
import axios from "axios";
import SearchForm from "../components/SearchForm";


const STATUS = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
};

class Beers extends Component {

  state =  {
    beers: undefined,
    searchQuery: '',
    status: STATUS.LOADING
  };

  getBeerRows(beers) {
    return beers.map((beer,index) => {
      return <BeerRow key={index} {...beer} />;
    })
  }

  searchBeers() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.searchQuery}`)
      .then(res => {
        this.setState({
          beers: res.data,
          status: STATUS.LOADED
        });
      })
      .catch(err => {
        this.setState({
          status: STATUS.ERROR
        });
      });
  }

  componentDidMount() {
    this.searchBeers();
  }

  handleChange = (e) => {
    this.setState({
      status: STATUS.LOADING,
      searchQuery: e.target.value,
    });
    this.searchBeers();
  };


  render() {
    const {beers, status, searchQuery} = this.state;
    return (
      <div>
        <Header/>
        <SearchForm handleChange={this.handleChange} value={searchQuery}/>
        {status === STATUS.LOADED && this.getBeerRows(beers)}
        {status === STATUS.LOADING &&
        <div className={'loading'}>
          <img src="/images/spinner.gif" alt=""/>
        </div>}
        {status === STATUS.ERROR && <p>ERROR!</p>}
      </div>
    );
  }
}

export default Beers;