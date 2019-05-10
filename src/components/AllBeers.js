import React, {Component} from 'react'
import NavBar from './NavBar'
import CardsBeer from './CardsBeer'
import axios from 'axios'


class AllBeers extends Component{
  state = {
    beers:[]
  }
  componentDidMount(){
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(
      response => this.setState({beers: response.data})
    )
    .catch ((err) => console.log(err))
  }
  render(){
    return(
      <div>
      {this.state.beers.map((beer,i) => {
         return(
           <CardsBeer {...beer} />
         ) 
      })}
      </div>
    )
  }
}

export default AllBeers