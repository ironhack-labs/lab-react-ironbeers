import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Beers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      // console.log(response.data);
      this.setState({beers : response.data});
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  render () {

    return (
    <div>
      <h1>All the beers</h1>
      {this.state.beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt="" />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>Contributed by: <em>{beer.contributed_by}</em></p>
          <p><Link to={`/beers/${beer._id}`}>See details</Link></p>
        </div>
      ))}
    </div>
  );
    }
};

export default Beers;
