import React, { Component } from 'react';
import axios from 'axios';
import Beer from '../../components/Beer';
import Header from '../../components/header/Header';

class singleBeer extends Component {
  state = {
    singleBeer: {},
  };

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          singleBeer: res.data,
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <Beer beer={this.state.singleBeer} />
      </div>
    );
  }
}

export default singleBeer;
