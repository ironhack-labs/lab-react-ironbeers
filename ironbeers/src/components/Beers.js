import React, {Component} from 'react'
import Services from '../services/beers.services'
import { Link } from 'react-router-dom'

class Beers extends Component {

  constructor() {
    super()
    this.state = { beers: [] }

    this.services = new Services()
  }

  componentDidMount() {
    this.services.getAllBeers()
        .then(response => this.setState({ beers: response.data }))
        .catch(err => console.log(err))
  }
  
  
  render () {

    return (
      <>
          <Link className="back-to-home" to="/">Home</Link>  

          <div className="container">
            { this.state.beers.map((elm, idx) =>
              <div key={idx} className="row show">
                  <div className="col-md-4">
                    <Link to={elm._id}><img src={elm.image_url} alt={elm.name}></img></Link>
                  </div>
                  <div className="col-md-6">
                      <h3>{elm.name}</h3>
                      <h4>{elm.tagline}</h4>
                      <p><strong>Created by: </strong>{elm.contributed_by}</p>
                  </div>
                  
              </div>
            )}      
          </div>
      </>    
    )
  }
}

export default Beers