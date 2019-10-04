import React, { Component } from 'react'
import Beer from './Beer'
import Header from './Header'
// import axios from "axios";


export default class AllBeers extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     beers: []
  //   }
  // }
 
  render() {
    console.log(this.props)
    return (
      <div className="allBeers">
        <Header></Header>
        {this.props.beers.map((beer)=>{
          return <Beer {...beer}></Beer>
        })}
      </div>
    )
  }
}
