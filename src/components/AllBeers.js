import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import SearchBeer from './SearchBeer';

export default class AllBeers extends Component {
  state = {
    filterBeers: [],
  };

  componentDidMount() {
    this.setState({
      filterBeers: this.props.beerList,
    });
  }

  showAllBeers = () => {

    return this.state.filterBeers.map((eachElement, i) => {
      return (
        <div key={eachElement._id}>
          <Link to={`/all-beers/${eachElement._id}`}>
            <img src={eachElement.image_url} alt="This beer" />
            <li key={eachElement[i]}>{eachElement.name}</li>
            <li key={eachElement[i]}>{eachElement.tagline}</li>
            <li key={eachElement[i]}>{eachElement.contribuited_by}</li>
          </Link>
        </div>
      );
    });
  };

  searchBeer = (name) => {let arr = this.props.beerList.filter((element) => {return element.name.toLowerCase().includes(name.toLowerCase());});
    this.setState({
      filterBeers: arr,
    });
  };

  render() {
    return (
      <div>
        <SearchBeer searchProp={this.searchBeer} />
        {this.showAllBeers()}
      </div>
    );
  }
}

