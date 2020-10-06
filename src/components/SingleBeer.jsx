import React from 'react'
import axios from 'axios'

class SingleBeer extends React.Component {

  state = {
    oneBeer: "",
  }

  getSingleBeer() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    .then(response => {
        this.setState({ oneBeer: response.data})
    })
  }

  componentDidMount() {
    this.getSingleBeer()
  }
  

  render() {
    const beer = this.state.oneBeer
    return (
      <div className="container">
        <div className="card text-center" style={{width: '18rem'}}>
        <img className="card-img-top" src={beer.image_url} alt={beer.name} style={{  width: '200px' }}></img>
        <div class="card-body">
          <h5 className="card-title">{beer.name}</h5>
          <h6 className="card-text"><small className="text-muted">{beer.tagline}</small></h6>
          <p className="card-text">{beer.description}</p>
          <p className="card-text">{beer.attenuation_level}</p>
          <p className="card-text">{beer.first_brewed}</p>
          <p className="card-text"><b>Created by: </b>{beer.contributed_by}</p>
        </div>

      </div>
      </div>
    )
  }
}

export default SingleBeer