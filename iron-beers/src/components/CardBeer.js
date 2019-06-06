import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
      <div className="beer-card">
        <img src={this.props.image_url} alt="beer" />
        <div className="beer-card-info">
          <Link className="btn btn-sm btn-outline-dark" to={`/beers/${this.props._id}`}>
            <h2>{this.props.name}</h2>
          </Link>
          <div className="beer-card-text">
            <p>{this.props.tagline}</p>
            <p>{this.props.contributed_by}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
