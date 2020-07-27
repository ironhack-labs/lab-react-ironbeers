import React, { Component } from 'react';
import BeerCard from './BeerCard';
import Header from '../header/Header';
import axios from 'axios';
export class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = { beers: props.beers, search: '' };
  }
  onChange = async (event) => {
    this.setState({
      search: event.target.value,
    });
    if (event.target.value.length > 0) {
      const result = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`
      );
      this.setState({ beers: result.data });
    } else {
      this.setState({ beers: this.props.beers });
    }
  };
  render() {
    // const list = this.props.beers
    //   .filter((b) => b.name.toLocaleLowerCase().includes(this.state.search))
    //   .map((beer) => <BeerCard key={beer._id} beer={beer} />);
    const list = this.state.beers.map((beer) => (
      <BeerCard key={beer._id} beer={beer} />
    ));
    return (
      <div>
        <Header></Header>
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            id="search"
            className="form-control"
            placeholder="Beer search"
            onChange={this.onChange}
          />
        </div>
        {list}
      </div>
    );
  }
}

export default Beers;
