import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default class singleBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: '',
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(id, this.props.match);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((beer) => {
        this.setState({
          beer: beer.data,
        });
      });
  }

  render() {
    return <div></div>;
  }
}
