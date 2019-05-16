import React from 'react';
import axios from 'axios';


const componentDidMount =  () => {
  axios.get('https://ih-beer-api.herokuapp.com/beers')
    .then( response => {
      this.setState( { beers: response.data } )       
    });
}

export default componentDidMount;