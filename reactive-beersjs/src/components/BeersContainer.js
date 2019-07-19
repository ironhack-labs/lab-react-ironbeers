import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios'
import {Link} from 'react-router-dom'
class BeersContainer extends Component {

  state = {
    beers: []
  }

  componentDidMount = () => {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState({ beers: [data[0], data[1], data[2]] })
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Beers Container</h1>
        {this.state.beers.map((beer, i) => {
          return <div className="beer-item" key={i}>
            <Link to={`/beer/${beer._id}`}>
              <div>
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div>
                <h3> {beer.name} </h3>
                <p>{beer.tagline}</p>
                <small> <b>Created by: </b>{beer.contributed_by}</small>
              </div>
            </Link>
          </div>
        })}
      </div>
    )
  }
}


export default BeersContainer
