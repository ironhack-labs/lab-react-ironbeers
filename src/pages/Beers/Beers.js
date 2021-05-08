import React, { Component } from 'react';
import BeerListElement from '../../components/BeerListElement/BeerListElement';
import NavBar from '../../components/NavBar/NavBar';
import BeersService from '../../services/beers.service';

export default class Beers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
      search: '',
    };
    this.beersService = new BeersService();
  }

  componentDidMount() {
    this.beersService
      .getAll()
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((err) => console.error(err));
  }

  displayBeers() {
    return this.state.beers.map((beer) => {
      return <BeerListElement key={beer._id} {...beer} />;
    });
  }

  handleSearch(event) {
    this.setState({ search: event.target.value });
    this.beersService
      .search(this.state.search)
      .then((response) => {
        this.setState({beers: response.data});
      })
      .catch(err => console.error(err));      
  }

  render() {
    return (
      <div>
        <NavBar />
        <input
          type="text"
          className="form-control"
          id="search-input"
          name="search"
          placeholder="Find a beer..."
          onChange={(e) => this.handleSearch(e)}
        />
        {this.displayBeers()}
      </div>
    );
  }
}
