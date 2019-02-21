import React, { Component } from 'react';
import axios from 'axios';

class beerDetail extends Component {
  constructor(props){
      super(props);    
    this.state = {
      beer: []
    }         
  }
  
  componentDidMount(){
  axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.id}`)
  .then(response => {
      this.setState({
          beer: response.data
      })
    })
  }  
  render() {
    return (
      <div>
        <img width='100px' src={this.state.beer.image_url} alt=''/>
        <h3><a href= "/beer/">{this.state.beer.name}</a></h3>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
  }


export default beerDetail;