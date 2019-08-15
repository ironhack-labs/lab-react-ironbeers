import React, {Component} from 'react'
import Services from '../services/beers.services'
import { Link } from 'react-router-dom'

class RandomBeer extends Component {

  constructor(props) {
    super(props)
    this.state = { beer: {} }

    this.services = new Services()
  }

  componentDidMount() {
    this.services.getRandomBeer()
        .then(response => this.setState({ beer: response.data }))
        .catch(err => console.log(err))
  }


  render () {
    return (
      <>
        <Link className="back-to-home" to="/">Home</Link> 

        <div className="container">
          <div className="row one">
              <div className="col-md-4">
                  <img src={this.state.beer.image_url} alt={this.state.beer.name}></img>
              </div>

              <div className="col-md-6">
                  <h3>{this.state.beer.name}</h3>
                  <h4>{this.state.beer.tagline}</h4>
                  <p><strong>First Brewed: </strong>{this.state.beer.first_brewed}</p>
                  <p><strong>Attenuation level: </strong>{this.state.beer.attenuation_level}</p>
                  <p><strong>Description: </strong>{this.state.beer.description}</p>
                  <Link to="/beers">Back to the list</Link>

              </div>

          </div>

        </div>
      </>
    )
  }
}

  export default RandomBeer