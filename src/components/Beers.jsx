import React from 'react';
import beerAPI from '../api/beerAPI';
import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import BeersDetails from './BeersDetails';

class Beers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    beerAPI
      .getAllBeers()
      .then((apiResponse) => {
        this.setState({ beers: apiResponse.data });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (evt) => {
    beerAPI.findOne(evt.target.value)
    .then((apiResponse) => {
        this.setState({beers: apiResponse.data});
    })
    .catch((err) => console.log(err));

  }


  render() {
    return (
      <div>
        <NavMain />
        <label>Beer Search: </label>
        <input onChange={this.handleChange} type="text" name="name" />
        {this.state.beers.map((beer) => (
          <BeersDetails key={beer._id} beer={beer} />
        ))}
      </div>
    );
  }
}

export default Beers;
