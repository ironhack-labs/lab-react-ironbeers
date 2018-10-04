import React from 'react'
import Header from './Header';
import axios from 'axios'
import { BeerList } from './BeerList';
import { Link } from "react-router-dom";
export default class Beers extends React.Component{
  constructor(){
    super()
    this.state={beers:[]}
  }
  componentWillMount(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
    .then(res=>{
      this.setState({beers:res.data})
    })
    .catch(e=>console.log(e))
  }
  render(){
    return (
      <div>
        <Header loading={(this.state.beers.length===0)}></Header>
        <ul>
        {this.state.beers.length > 0 && this.state.beers.map(beer=>{
            return <Link key={beer._id} to={"/beers/"+beer._id}><BeerList {...beer}></BeerList></Link>
           })
        }
      </ul>
      </div>
    )
  }
}