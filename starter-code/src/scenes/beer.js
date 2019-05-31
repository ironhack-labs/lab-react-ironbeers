import React, {Component, Fragment} from 'react'
import Navbar from '../components/navbar'
import BeersService from '../services/BeersService'
import Cards from '../components/Cards'

class Beer extends Component {
  state = {
    beer : {},
    style: {
      maxWidth: '50px', 
      margin: 'auto', 
      paddingTop: '2em'
    }
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
    
    return (
      <Fragment>
        <Navbar />
        <div className="container pt-2">
          <Cards 
            name={this.state.beer.name} 
            style={this.state.style}
            img={this.state.beer.image_url && this.state.beer.image_url } 
            description = {this.state.beer.description && this.state.beer.description}
          />
        </div>
      </Fragment>
    )
  }
}
export default Beer