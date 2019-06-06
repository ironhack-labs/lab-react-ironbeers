import React, {Component} from 'react'
import BeerServices from '../../services/beerServices'
import NavBar from '../stateless/navBar'

class BeerDetails extends Component  {
  constructor(props){
    super(props) 
    this.state = {beer: {}}
    this.services = new BeerServices()
  }

  componentDidMount() {
    if(this.props.match.params.id){
    this.services.getOneBeer(this.props.match.params.id)
      .then( beer => this.setState({beer}))
    } else {
      this.services.getRandomBeer()
      .then( beer => this.setState({beer}))
    }
  }

  render() {

    return(
      <div className="details">
        <NavBar/>
        <img src={this.state.beer.image_url} alt="cagoendios"/>
        <h2>{this.state.beer.name}</h2>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.description}</p>
        <p>Attenuation Level: {this.state.beer.attenuation_level}</p>



      </div>
    )

  }
}

export default BeerDetails