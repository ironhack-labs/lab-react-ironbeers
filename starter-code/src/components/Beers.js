import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import Axios from 'axios';
import ShowInfoBeer from './ShowInfoBeer';

const STATUS = {
  ISLOADING : 'loading',
  ISLOADED : 'loaded',
  ERROR : 'error'
}

class Beers extends Component{

  state = {
    status : STATUS.ISLOADING,
    beers : ""
  }

  componentDidMount(){
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) =>{
        console.log(response.data)
        this.setState({
          beers : response.data,
          status : STATUS.ISLOADED
        })
      })
      .catch(error =>{
        this.setState({
          status : STATUS.ERROR
        })
      })
  }

  getAllTheBeers(){
    const {beers} = this.state
    return beers.map((beer) => {
      return <div key={beer._id}>
              <div className="one-beer-of-the-list">
                <img className="img-of-each-beer" src={beer.image_url} alt={beer.name} />
                <div className="info-beer">
                  <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                  <h5>{beer.tagline}</h5>
                  Created by : {beer.name}
                </div>
             </div>
             <hr/>
            </div>
    })
  }

  render(){
    const {beers, status} = this.state
    return(
      <div>
        List of all beers
        {status === 'loading' && <h3>Loading data</h3> }
        {beers.length>1 && this.getAllTheBeers()}
      </div>
    )
  }
}

export default Beers