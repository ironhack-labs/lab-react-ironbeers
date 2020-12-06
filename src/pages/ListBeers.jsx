import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"


export default class ListBeers extends Component {

state ={
    beers: []
}

componentDidMount = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((responseBack) => {
    //    console.log("responseBack:", responseBack.data);
    this.setState({ beers: responseBack.data });
    });
  };

  render() {
      return ( 
            <div>
                {this.state.beers.map((beer) => {
                    return (
                        <Link to={`/${beer._id}`} key={beer._id} style={{textDecoration: "none"}}>
                        <div > 
                        <img style={{width:"30px", height: "100px" }} src={beer.image_url} alt=""/>
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}


