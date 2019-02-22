import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Route, Redirect} from 'react-router';


class Beer extends React.Component {
constructor() {
  super();
  this.state = {
    beers: []
  };
}
componentDidMount() {
  axios.get("https://ironbeer-api.herokuapp.com/beers/all").then(response => {
    this.setState({ beers: response.data });
  });
}

render() {
  return (
    <div className="App">
      {this.state.beers.map(beer => (<div><Link to="single/:id">{beer.name}</Link></div>))}
    </div>
  );
}
}

export default Beer;
