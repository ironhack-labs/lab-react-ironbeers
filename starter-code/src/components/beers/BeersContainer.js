import React, { Component } from 'react'
import BeerCard from './BeerCard'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import axios from 'axios'


export default class BeerAll extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        console.log(data)
        this.setState({ beers: data });
      })
      .catch((error) => { console.log(error) });
  }

  render() {
    const { beers } = this.state
    return (
      <div>
        <h1>All Beers</h1>
        <Link to="/">
          <Button type="primary">Home</Button>
        </Link>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            width: '100em',
            height: '100em'
          }}>


          {beers.map((beer) => (
            <BeerCard key={beer._id} beer={beer} />
          ))}
        </div>
      </div>
    );
  }
}
