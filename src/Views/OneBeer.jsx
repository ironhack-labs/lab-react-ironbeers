import React, { Component } from 'react'
import axios from 'axios'
import Header from '../Components/Header'

class OneBeer extends Component {
  state = {
    beer: null,
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // console.log(id)

    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((response) => {
        this.setState({beer: response.data})
    })
    .catch((error) => {
        console.log(error)
    })
  }

  render() {
    if (this.state.beer === null) {
      return <div>Fetching a beer for you...</div>
    }

    return (
      <section>
        <Header />

        <div className="oneBeer">
          <div>
          <img style={{height: "200px"}} src={this.state.beer.image_url} alt="" />
          </div>
          <div className="oneBeerTitle">
            <h1>{this.state.beer.name}</h1>
            <p>{this.state.beer.attenuation_level}</p>
          </div>
          <div className="oneBeerTag">
            <b>{this.state.beer.tagline}</b>
            <p>{this.state.beer.first_brewed}</p>
          </div>
          <p className="oneBeerDescr">{this.state.beer.description}</p>
          <i>{this.state.beer.contributed_by}</i>
        </div>
      </section>
    )
  }
}

export default OneBeer
