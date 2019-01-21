import React, { Component } from "react";
import Header from "./Header.jsx";
import axios from "axios";
import Card from "./Card.jsx";
import FormField from "./FormField.jsx";

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      search: ""
    };
  }

  allBeers = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`).then(e => {
      this.setState({
        beers: e.data
      });
    });
  };
  filterBeers = e => {
    this.setState({
      search: e.target.value
    });
    axios
      .get(
        `https://ironbeer-api.herokuapp.com/beers/search?q=${this.state.search}`
      )
      .then(element => {
        this.setState({
          beers: element.data
        });
      });
  };
  componentDidMount() {
    this.allBeers();
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <FormField
          label="Search"
          placeholder="Type some name"
          inputchange={e => this.filterBeers(e)}
        />
        <div>
          {this.state.beers.map((e, index) => (
            <Card data={e} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Beers;
