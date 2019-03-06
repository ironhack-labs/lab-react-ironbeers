import React, { Component } from "react";
import {Redirect} from 'react-router-dom'

class BeersList extends Component {
  state = { listOfBeers: [] };

  getAllBeers = () => {
    fetch("https://ironbeer-api.herokuapp.com/beers/all").then(reponseApi => {
      reponseApi.json().then(data => {
        this.setState({ listOfBeers: data });
        this.getRandomBeers();
      });
    });
  };

  getRandomBeers = () =>{
    const randomNumber = 0 + Math.floor((Math.random() * (0 + this.state.listOfBeers.length)))
    let id = this.state.listOfBeers[randomNumber]._id;
    this.setState({id});
  }

  componentDidMount() {
    this.getAllBeers();
    
  }

  render() {
    console.log(this.state);
    return (
      <div>
              {this.state.id?<Redirect to={`/beerlist/${this.state.id}`}></Redirect>:null}

      </div>
    );
  }
}

export default BeersList;
