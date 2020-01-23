import React, { Component } from 'react';
import axios from 'axios';

class OneBeer extends Component{

  state = {
    oneBeer: false
  }

  componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    .then(response => { this.setState( {oneBeer: response.data} )})
    .catch(error => { console.log(error) });
  };

  render(){
    return(
      <div>
        <h1>One Beer</h1>
        <span>{
          this.state.oneBeer.name
        }</span>
      </div>
    );
  }
}

export default OneBeer;