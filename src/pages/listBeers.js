import React, { Component } from "react";
import { Header } from "../components/Header";
import { getBeer } from "../lib/getBeer";
import { BeerCard } from "../components/BeerCard";
import SearchBar from "../components/SearchBar";

class ListBeers extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      filterText: ""
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  componentDidMount() {
    getBeer("all").then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <div>
          {this.state.data ? (
            this.state.data.map(beer => <BeerCard key={beer._id} beer={beer} />)
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    );
  }
}

export default ListBeers;
