import React, { Component } from 'react'
import { Card, Button } from 'antd'
import axios from 'axios'
import Nav from './Nav'

class RandomBeer extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers/random')
      .then(({ data }) => {
        this.setState({ beer: data })
      })
      .catch(error => {})
  }

  render() {
    const { beer, i } = this.state
    return (
      <div>
        <Nav />
        <div key={i}>
          <Card>
            <div>
              <img src={beer.image_url} height="200vh" alt=""></img>
            </div>
            <div>
              <div>
                <h3>{beer.name}</h3>
                <span>{beer.attenuation_level}</span>
              </div>
              <div>
                <h5>{beer.tagline}</h5>
                <span>{beer.first_brewed}</span>
              </div>
              <hr />
              <p>{beer.description}</p>
              <small>
                <b>Created by:</b> {beer.contributed_by}
              </small>
            </div>
            <div>
              <Button type="primary" onClick={() => this.props.history.goBack()}>
                Go back
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default RandomBeer
