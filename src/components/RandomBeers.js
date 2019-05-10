import React, {Component} from 'react'
import NavBar from './NavBar'
import CardsBeer from './CardsBeer'
import axios from 'axios'

class RandomBeers extends Component{
  state ={
    beer:{}
  }
  componentDidMount(){
    axios.get("https://ih-beer-api.herokuapp.com/beers/random")
    .then(
      response => this.setState({beer: response.data})
    )
    .catch ((err) => console.log(err))
  }
  render(){
    return (
      <div>
        <CardsBeer {...this.state.beer} />
      </div>
    )
  }
}


export default RandomBeers