import React, {Component, Fragment} from 'react'
import BeersService from '../services/BeersService'
import Navbar from '../components/navbar'

class Beers extends Component {
  state = {
    beers : []
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
      </Fragment>
    )
  }
}

export default Beers