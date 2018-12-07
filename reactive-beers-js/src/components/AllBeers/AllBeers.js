import React, { Component } from 'react'
import BeerBox from './BeerBox'
import axios from 'axios'
import './AllBeers.css'


export default class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    }
  }


  componentDidMount() {
    this.getBeers();
  }


  getBeers = () => {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(res => {
        this.setState({...this.state, beers: res.data })
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="all-beers">
        {this.state.beers.map((beer, index) => {
          return (<BeerBox key={index} beer={beer}/>)
        })
        }
      </div>
    );
      }
}