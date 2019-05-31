import React, {Component, Fragment} from 'react'
import BeersService from '../services/BeersService'
import Navbar from '../components/navbar'
import {Link} from 'react-router-dom'
class Beers extends Component {
  state = {
    beers : [
      {
        image_url: "https://images.punkapi.com/v2/2.png",
        _id: "5ccc1e2caea376c9272c5a76",
        id: 2,
        name: "Trashy Blonde"
      }
    ], 
    beer: ''
  }
  componentDidMount = () => {
    BeersService.getAllBeers()
      .then(
        beers => this.setState({beers}), 
        error => console.error(error)
      )
  }

  render(){
    return (
      <Fragment >
        <Navbar />
        {this.state.beers.length}
        <ul className="list-group">
          {this.state.beers.map((e,i)=>(
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <Link to={`beers/${e._id}`}>{e.name}</Link>
              <div className="image-parent">
                  <img src={e.image_url} class="img-fluid" alt={e.name} style={{maxWidth:'30px'}} />
              </div>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Beers