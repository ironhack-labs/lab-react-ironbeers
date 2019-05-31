import React, {Component, Fragment} from 'react'
import Navbar from '../components/navbar'
import BeersService from '../services/BeersService'
import Cards from '../components/Cards'

class Beer extends Component {
  state = {
    beer : {}
  }

  componentDidMount () {
    const {id} = this.props.match.params
    BeersService.getBeerbyId(id)
      .then(
        beer => this.setState({beer}), 
        err => console.error(err)
      )
  }

  render (){
    console.log(this.state.beer)
    return (
      <Fragment>
        <Navbar />
        <Cards 
          name={this.state.beer.name} 
          img={this.state.beer.image_url && this.state.beer.image_url } 
          description = {this.state.beer.description && this.state.beer.description}
        />
      </Fragment>
    )
  }
}
export default Beer