import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Beers.css';


export default class Beers extends Component {

  constructor() {
    super();
    this.state = { listOfBeers: null };
  }

  getAllBeers = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.setState({
          listOfBeers: responseFromApi.data
        })
      })
  }
  componentDidMount() {
    this.getAllBeers();
  }


  render() {
    return this.state.listOfBeers ?
      (      
      <div>
        <Header/>
        <div>
          {this.state.listOfBeers.map((beer, index) => {
            return (
              <div className="beer-container" key={beer._id}>
                <img className="img-beer" src={beer.image_url} alt=""/>
                <div>
                  <h2>{beer.name}</h2>
                  <h5>{beer.tagline}</h5>
                </div>
              </div>
            )
          })
          }
        </div>
       </div>)
      :
      (
        <p>Loading...</p>
      )
  }
}
