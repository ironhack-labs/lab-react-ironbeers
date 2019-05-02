import React, { Component } from 'react'
import axios from "axios";
import Beer from './Beer'; 

export default class ListBeers extends Component {
  constructor(){
    super()
    this.state = {
      ListBeers: []
 }
}

  componentDidMount(){
    axios
        .get("http://localhost:5000/all")
        .then(allBeers => {
            const allBeersPay = allBeers.data
  
            this.setState({
                ...this.state,
                ListBeers: allBeersPay
            })
        })
  }


  render() {
    console.log(this.state.ListBeers)
    return (
      <div>
        <h2>List of Beers</h2>
                        {
                            this.state.ListBeers.map((beer) => {
                                return(
                                  <Beer name={beer.name} image_url={beer.image_url}
                                  contributed_by={beer.contributed_by}
                                  tagline={beer.tagline}></Beer>
                                )
                            })
                        }
                     
      </div>
    )
  }
}
