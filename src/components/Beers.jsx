import React, { Component } from 'react';
import { Header } from './Header';
import axios from 'axios';
import CardBeer from './CardBeer';
import { Link } from 'react-router-dom';

export class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      searchTerm: '',
    };
  }
  async componentDidMount() {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );
    //console.log('RESPUESTA', response.data);
    this.setState({ beers: response.data });
    //console.log('CERVEZA 1', this.state.beers[0]);
  }

  handleChange = (evento) => {
    this.setState({
      [evento.target.name]: evento.target.value,
    });
  };

  render() {
    let cervezas = this.state.beers;

    if (this.state.searchTerm)
      cervezas = this.state.beers.filter((elem) =>
        elem.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
      );
    const beerCard = cervezas.map((element) => (
      <CardBeer
        key={element._id}
        image_url={element.image_url}
        name={<Link to={'/' + element._id}>{element.name}</Link>}
        description={element.description}
      />
    ));

    return (
      <div>
        <Header />
        <input
          type="text"
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />

        <h2>All the Beers</h2>
        {beerCard}
      </div>
    );
  }
}

export default Beers;
