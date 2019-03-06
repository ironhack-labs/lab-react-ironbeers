import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import HomePage from './HomePage'

class Beer extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getBeerFromApi()
  }

  getBeerFromApi = () => {
    const { params } = this.props.match

    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`).then(response => {
      this.setState(response.data)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return(
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

export default Beer