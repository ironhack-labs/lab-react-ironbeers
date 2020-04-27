import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";



const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class SearchBeer extends Component {
  state = {
    name: '',
    beers: [],
  }


  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  SearchBeer = () => {
    const { name, beers } = this.state;
    const { changeBeers } = this.props;
    console.log('Esto es el nombre', name)
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${name}`)
      .then((response) => {
        console.log('Response', response.data)
        this.setState({
          status: STATUS.LOADED,
        })
        changeBeers(response.data)
      })
      .catch((error) => {
        this.setState({
          status: STATUS.ERROR
        })
      })
  }


  render(){
    const { name } = this.state;
    return(
    <div className='search-container'>
      <input
        className='search-bar'
        name='name'
        type='text'
        placeholder="Name"
        value={name}
        onChange={this.handleInput}
      />
        <button className='button-beer' onClick={this.SearchBeer}>Search</button>
    </div>
    )
  }
}

export default SearchBeer;