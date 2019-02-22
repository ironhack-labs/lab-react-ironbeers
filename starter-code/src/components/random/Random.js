import React from 'react';
import axios from 'axios';
import { Route, Redirect} from 'react-router';


class Random extends React.Component {
constructor() {
  super();
  this.state = {
    beers: []
  };
}
componentDidMount() {
  axios.get("https://ironbeer-api.herokuapp.com/beers/random").then(response => {
    this.setState({ beers: response.data });
  });
}

render() {
  return (
    <div className="App">
      {this.state.beers.map(beer =>
      <div> 
      <img src={beer.image_url}></img>
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.description}</p>
      <p>{beer.brewers_tips}</p>
      </div>
      )}


    </div>
  );
}
}

export default Random;
