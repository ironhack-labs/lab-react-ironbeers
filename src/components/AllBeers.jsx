import React from 'react'
import axios from 'axios';

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
        hola
        {this.state.beers.map((beer) => {
          return (
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src="" className="card-img" alt="..."></img>
                </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{beer.name}</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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