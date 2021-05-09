import React from 'react';
import '../App.css';
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Header from './Header';



class AllBeers extends React.Component {
  render(){  
      const beerlist = this.props.beers.map((beer,index)=>{
          return(
              <div key={index}>
              <Link to={`/beers/${beer._id}`}>
                  <img src={beer.image_url} alt={beer.name} />
                  <div>
                      <h1>{beer.name}</h1>
                      <p>{beer.tagline}</p>
                      <p>{beer.contributed_by}</p>
                  </div>
                </Link>
              </div>
          )
      })
  return(
      <div>
        <Header />
        {beerlist}
    </div>
    )
  }
}

export default AllBeers;