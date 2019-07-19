import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios'

class BeersContainer extends Component {

  state = {
    beers: []
  }

  componentDidMount = () => {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        console.log(data);

        this.setState({ beers: data })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Beers Container</h1>
        {this.state.beers.map((beer, i) => {
          console.log(beer)
          return <div className="beer-item" key={i}>
            <div>
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div>
              <h3> {beer.name} </h3>
              <p>{beer.tagline}</p>
              <small> <b>Created by: </b>{beer.contributed_by}</small>
            </div>
        </div>
        })}
      </div>
    )
  }
}


export default BeersContainer
