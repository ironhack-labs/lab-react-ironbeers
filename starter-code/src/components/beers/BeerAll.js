import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'
import axios from 'axios'

export default class BeerAll extends Component {
  state = {
    beers: []
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(response => {
        this.setState({ beers: response.data })
      })
      .catch(error => {
        console.log('hola!')
      })
  }

  render() {
    const { beers } = this.state
    console.log(beers)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          width: '50vw',
          height: '50vh'
        }}
      >
        {beers.length === 0 && <p>Loading</p>}
        {beers.map((beer, id) => (
          <>
            <Card
              key={id}
              title={beer.name}
              style={{ width: '15%' }}
              cover={
                <img src={beer.image_url} alt={beer.name} height="200px" />
              }
            ></Card>

          </>
        ))}
      </div>
    )
  }
}
