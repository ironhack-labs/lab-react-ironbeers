import React, { Component } from 'react'
import axios from "axios";
import {  Link } from "react-router-dom";

class AllBeers extends Component {

  state = {
    beers: [],
    searchValue:"",
  };


  componentDidMount() {
  axios
  .get("https://ih-beers-api2.herokuapp.com/beers")
  .then((beers) => {
    console.log(beers.data);
    this.setState({ beers: beers.data });
  })
  .catch((error) => {
    console.log(error);
  });
  }



  searchBeer =(event)=> {

    let value = event.target.value.toLowerCase();

   axios
   .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
   .then((beers) => {

     let searchArr = beers.data ;
     let searchResult = searchArr.filter((beer)=>beer.name.toLowerCase().includes(value))

     console.log(searchResult);
      this.setState({ beers: searchResult });
   })
   .catch((error) => {
     console.log(error);
   });
   }



  render() {

    return (

      <div>
           <input type="text" placeholder="search" value={this.state.beers.data} onChange={this.searchBeer}/>
        {this.state.beers.map((beer) =>  ( 
          <div key={beer._id}>

            <img src={beer.image_url} alt=""/>
            <h2> { beer.name } </h2>
            <p>{beer.tagline}</p>
            <h3>{beer.contributed_by}</h3>
            <Link to={`/beers/${beer._id}`}>See more !</Link>
          </div>
        ))}


      </div>
    )
  }
}

export default AllBeers;