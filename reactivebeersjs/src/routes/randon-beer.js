import React, { Component } from 'react';
import axios from 'axios';

class RandonBeer extends Component {
  constructor(props){
    super(props);
    this.state = {
      randonBeer: {}
    }           
  }

  componentDidMount(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/random')
    .then(response => {
      this.setState({randonBeer: response.data[0]})
    })
  }

  render(){
    return (
      <div>
        <img width='100px' src={this.state.randonBeer.image_url} alt=''/>
        <h3><a href= "/beer/">{this.state.randonBeer.name}</a></h3>
        <p>{this.state.randonBeer.tagline}</p>
        <p>{this.state.randonBeer.contributed_by}</p>
      </div>
    );
  }  
}

export default RandonBeer;