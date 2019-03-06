import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class RandomBeer extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.getBeerFromApi()
  }

  getBeerFromApi = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/random`).then(response => {
      this.setState(response.data[0])
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-primary">
          Inicio
        </Link>
        <div className="card">
          <img src={this.state.image_url} alt={this.state.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <p className="card-text">{this.state.description}</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default RandomBeer