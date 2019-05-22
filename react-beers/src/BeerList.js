import './App.css';
import React, { Component } from 'react';
import axios from "axios";
import { Link} from "react-router-dom";


class BeerList extends Component {
state={
  AllBeers: [] //emty array to put the api stuff into
}

componentDidMount () {
  axios.get("https://ih-beer-api.herokuapp.com/beers").then(allBeers => { //getting the api
    console.log(allBeers);

    this.setState({
      AllBeers: allBeers.data
    })
  })
}

showBeers =()=>{
return this.state.AllBeers.map(eachBeer => {
  return (
   <div className='list'>
    <div>
      <Link to={`/beers/${eachBeer._id}`}>
          <img src={eachBeer.image_url} width='20vw' alt='beers' ></img>
      </Link>
          <h3>{eachBeer.name}</h3>
          <h5>{eachBeer.contributed_by}</h5>
      </div>
   </div> 
  )
})
}



  render() {
    return (
      <div >
        {this.showBeers()}
      </div>
    );
  }
}

export default BeerList; 