import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

//props are automatically passed in class components?
class SingleBeer extends Component {
  state = {
    beers: [],
    singleBeer: {}
  }

  determineBeer() {
    let beer = this.state.beers.find(eachBeer => {
      return eachBeer._id === this.props.match.params.beerId
    })
    this.setState({
      singleBeer: beer
    })
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => {
        this.setState({
          beers: res.data
        })
        this.determineBeer()
      })
      //doesnt work when i put determineBeer down here?
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <img style={{"width":"100px"}}src={this.state.singleBeer.image_url}></img>
        <br/>
        Name: {this.state.singleBeer.name} <br/>
        {this.state.singleBeer.tagline} <br/>
        First Brewed:{this.state.singleBeer.first_brewed} <br/>
        Attenuation Level: {this.state.singleBeer.attenuation_level} <br/>
        description: {this.state.singleBeer.description} <br/>
        COntributed by: {this.state.singleBeer.contributed_by}
      </div>
    );
  }
}

export default SingleBeer;