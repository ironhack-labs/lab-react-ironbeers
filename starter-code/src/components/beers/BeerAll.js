import React, { Component } from 'react'
import { Card } from 'antd'
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          width: '100vw',
          height: '100vh'
        }}
      >
        {beers.map((beer) => (
          <Card key={beer._id} title={beer.name} style={{ width: '25%' }} cover={<img src={beer.image_url} alt={beer.name} height="500px" />}>

          </Card>
        ))}
      </div>
    )
  }
}
