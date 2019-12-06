import React, { Component } from 'react';
import BeersCards from '../../components/BeersCards'
import BeersService from '../../services/BeersService';
import Navbar from "../../components/Navbar";
const beersService = new BeersService()
export default class Home extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    const { data } = await beersService.getBeers();
    this.setState({ data });
  }
  render() {
    return (
      <>
      <Navbar/>
        {
          this.state.data.map((beer, i) => <BeersCards beer={beer} i={i}/>)
        }
      </>
    );
  }
}

