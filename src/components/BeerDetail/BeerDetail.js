import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class BeerDetail extends Component {
  constructor(props){
    super(props);
    this.state = {};
}

componentDidMount(){
    this.getSingleBeer();
}

getSingleBeer = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/single/${params.id}`)
    .then( responseFromApi =>{
        const theBeer = responseFromApi.data;
        this.setState(theBeer);
    })
    .catch((err)=>{
        console.log(err)
    })
}

render(){
  return(
    <div>
      <h1>{this.state.name}</h1>
      <img src={this.state.image_url} />
      <p>{this.state.tagline}</p>
      <Link to={'/beers'}>Back to beers</Link>
    </div>
  )
    
  }
}
