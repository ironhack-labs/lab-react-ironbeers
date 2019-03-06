import React, {Component} from 'react';
import { oneBeer } from '../services/BeersServices';
import Navbar from './misc/NavBar';

class CardBeer extends Component  {
  constructor(props){
    super(props)
    this.state = {
      beer: [],
      error: false
    }
  }

  componentDidMount = () => {

    oneBeer(this.props.match.params.id)
    .then((response) => {
      this.setState({ beer: response.data })
    },
    (err) => {
      this.setState({ error: true })
    })
  }
  
  render = () => {
     
      if (this.state.error) {
        return (<h1>Sorry!!!</h1>);
    } else {
        return (
          <div className="container">
          <Navbar/>
            <div className="container">
              <div className="card" key={this.state.beer._id}>
                <div className="card-image">
                <img src={this.state.beer.image_url} alt={this.state.beer.name} className="image_card"/>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                    <h3>{this.state.beer.name}</h3>
                    <h5>{this.state.beer.tagline}</h5>
                    </div>
                    <div className="media-right">
                    <h3>{this.state.beer.attenuation_level}</h3>
                    <h5>{this.state.beer.first_brewed}</h5>
                    </div>
                  </div>
                    <h6><strong>Created by: </strong>{this.state.beer.name}</h6>
                      <p className="title is-4">{this.state.beer.tagline}</p>
                      <p className="subtitle is-6">{this.state.beer.brewers_tips}</p>    
                </div>
              </div>
            </div>
          </div>
    )
        }
  }

}

export default CardBeer