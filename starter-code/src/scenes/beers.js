import React, {Component, Fragment} from 'react'
import BeersService from '../services/BeersService'
import Navbar from '../components/navbar'
import {Link} from 'react-router-dom'
class Beers extends Component {
  state = {
    beers : [], 
    beer: '', 
  }
  componentDidMount = () => {
    BeersService.getAllBeers()
      .then(
        beers => this.setState({beers}), 
        error => console.error(error)
      )
  }

  render(){
    return !this.state.beers.length ? <Loading /> : (
      <Fragment >
        <Navbar />
        <ul className="list-group">
          {this.state.beers.map((e,i)=>(
            <Link 
              to={`beer/${e._id}`}  
              style={{color:'black'}}
              key={i} 
              className="list-group-item d-flex justify-content-between align-items-center">
              <div className="flex-column">
                {e.name}
                <p><small>by {e.contributed_by && e.contributed_by}</small></p>
                <div>{e.description && e.description.substring(0,140)}</div>
                <span className="badge badge-info badge-pill">{e.tagline}</span>
              </div>
              <div className="image-parent">
                  <img src={e.image_url} className="img-fluid" alt={e.name} style={{maxWidth:'30px'}} />
              </div>
            </Link>
          ))}
        </ul>
      </Fragment>
    )
  }
}
const Loading = () => <div> ...Cargando</div>


export default Beers