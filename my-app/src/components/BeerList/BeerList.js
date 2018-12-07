import React, { Component } from 'react';
import './BeerList.css';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Header from '../Header/Header'
import BeerDetails from '../BeerDetails/BeerDetails'


export default class BeerList extends Component {

  constructor(){
    super();
    this.state = { listOfBeers: null };
  }

  getAllBeers = () =>{
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all	`)
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
    return this.state.listOfBeers ? (
      <div className="containerListMain">
          <Header/>
      
        {this.state.listOfBeers.map(beer => {
          return (
            <div className="containerList"  key={beer._id}>
              <div>
                <img className="imgBeer" src={beer.image_url} alt="{beer.image_url}"></img>
              </div>
              <div className="textBeerList">
                <Link className="link" to="/detail">
                  <h2>{beer.name}</h2>
                </Link>
              <h3>{beer.tagline}</h3>
              <h4>created by:{beer.contributed_by} </h4>
              </div>
            </div>
          )})
        }
        <Route exact path="/detail" component={BeerDetails}/>
      </div>)
      :
      (
        <div className="containerLoading">
          <p >Loading...</p>
        </div>
      )

    
 }
}
