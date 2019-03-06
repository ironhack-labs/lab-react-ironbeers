import React from 'react';
import axios from 'axios';
import BeerItem from './BeerItem';


export default class BeerSingle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/random")
    .then( response => {
      this.setState({beer: response.data})
    })
  }

  render() {
    return (
      <BeerItem {...this.state.beer[0]}></BeerItem>
    );
  }
}