import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'antd'
import Nav from './Nav'

class BeerDetail extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({ beer: data })
      })
      .catch(error => {
        console.log(error)
      })
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

export default BeerDetail
