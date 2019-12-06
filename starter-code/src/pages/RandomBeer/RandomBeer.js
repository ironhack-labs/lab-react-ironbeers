import React, { Component } from 'react';
import BeersDetailCard from '../../components/BeerDetailCard';
import BeersService from '../../services/BeersService';
import Navbar from "../../components/Navbar";
const beersService = new BeersService()
export default class Home extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    const { data } = await beersService.getRandomBeer();
    this.setState({ data });
    console.log(data)
  }
  render() {
    return (
      <>
      <Navbar/>
        {
          <BeersDetailCard beer={this.state.data} />
        }
      </>
    );
  }
}
