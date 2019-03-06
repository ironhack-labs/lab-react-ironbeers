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
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
    .then( response => {
      this.setState({beer: response.data})
    })
  }

  render() {
    return (
      <BeerItem {...this.state.beer}></BeerItem>
    );
  }
}