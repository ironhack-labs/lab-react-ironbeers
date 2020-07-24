
import NavMain from './NavMain';
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Beers extends Component {
  state = {
    allBeers: [],
  };

  componentDidMount() {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then((apiRes) => {
        console.log(apiRes)
      this.setState({ allBeers: apiRes.data }); 
    })
      .catch((apiError) =>
        console.log(apiError));
   
  }

  render() {
    return <div className="allbeers">
    <NavMain />
    {this.state.allBeers.map((beer) => {
        return (
            <div className="info-beer">
                <img className="img-beer" src={beer.image_url}/>
                <div className="text-beer">
                <h3>{beer.name}</h3>
                <p style={{fontSize: "3vh", fontWeight: "200", color:"grey", marginTop: "2vh"}}>{beer.tagline}</p>  
                <p className="created" style={{marginTop:'1vh'}}><b>Created by</b> : {beer.contributed_by}</p> 
                <Link key={beer._id} to={"/all-beers/" + beer._id} className="link">Show details</Link> 
                </div>
            </div>
        )
    })}</div>;
  }
}

export default Beers;

