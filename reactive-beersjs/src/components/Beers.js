import React, { Component } from 'react'
import Header from './Header'
import Beer from './Beer'
import axios from 'axios'


export default class Beers extends Component {
  constructor(){
    super()
    this.state = {
      beers: null
    }

    
  }

  componentDidMount() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(res => {
        console.log(res.data)
        this.setState({beers : res.data})
      })
  }
  

  render() {
    console.log(this.axios)
    if(this.state.beers!==null){

      return (
        <div>
          <Header/>
          {this.state.beers.map((element, index) => {
            return <Beer key={index} elem={element}/>
          })}
        </div>
      )
    }else{
      return(
        <h1>LOADING...</h1>
      )
    }
  }
}
