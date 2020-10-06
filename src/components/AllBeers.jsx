import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class AllBeers extends React.Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        this.setState({ beers: response.data})
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.beers.map((beer) => {
          return (
            <div className="card mb-3 d-flex" style={{ maxWidth: '540px' }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={beer.image_url} className="img-fluid mx-auto d-block" alt={beer.name} style={{ maxHeight: '200px'}}></img>
                  </div>
                    <div className="col-md-8">
                      <div className="card-body text-left">
                        <Link to={`/beers/${beer._id}`}>
                        <h5 className="card-title">{beer.name}</h5>
                        </Link> 
                        <h6 className="card-text"><small className="text-muted">{beer.tagline}</small></h6>
                        <p className="card-text"><b>Created by: </b>{beer.contributed_by}</p>
                      </div>
                    </div>
                  </div>
                </div>
            )
          })}
      </div>
    )
  }
}

export default AllBeers