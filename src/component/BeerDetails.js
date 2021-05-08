import React from 'react';
import axios from 'axios';
import Beer from './Beer';



export default class BeerDetails extends React.Component {
  state = {
    beer: null
  }
  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          beer: response.data
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    return <Beer beer={this.state.beer} />
  }
}
