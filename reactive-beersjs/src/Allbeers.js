import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


export default class Allbeers extends Component {

  constructor(){
    super()
    this.state={
      beers:[]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/all')
      .then(allbeers => {
        this.setState({
          ...this.state,
          beers: allbeers.data
        })
      })
  }
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        
        {this.state.beers.map(beer=>{
          return <Link to={"/beer/"+beer._id}><p>{beer.name}</p></Link>
        })}
      </React.Fragment>
    )
  }
}
