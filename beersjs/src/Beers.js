import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios"
import Beer from "./Beer";

export default class Beers extends Component {

  state = {
    allBeers: []
  }

  componentDidMount(){
        axios
            .get("http://localhost:5000/all")
            .then(allBeersPayload => {
                const allBeers = allBeersPayload.data

                this.setState({
                    ...this.state,
                    allBeers: allBeers
                })
            })
  }

  render() {
    return (
      
      <ul>
        {this.state.allBeers.map((beer, idx) => {          
          return (<Link key={idx} to={`/beer/${beer._id}`}><li><Beer {...beer} /></li></Link>)
        })}
      </ul>
    )
  }
}
