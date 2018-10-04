import React from 'react'
import Header from './Header';
import BeerDetail from './BeerDetail';
import axios from 'axios';
export default class RandomBeer extends React.Component{
  constructor(){
    super()
    this.state={beer:undefined}
  }
  componentWillMount(){
    axios.get("https://ironbeer-api.herokuapp.com/beers/random")
    .then(res=>this.setState({beer:res.data[0]}))
    .catch(e=>console.log(e))
  }
  render(){
    return (
      <div>
        <ul>
        <BeerDetail loading={(!this.state.beer)} beer={this.state.beer}></BeerDetail>
        
      </ul>
      </div>
    )
  }
}