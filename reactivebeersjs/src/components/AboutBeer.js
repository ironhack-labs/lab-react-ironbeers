import React, { Component } from 'react';
import Header from "./Header";
import './AboutBeer.css'
import axios from 'axios';

class AboutBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeer: null
    }
  }

  componentDidMount = () => {
    if (this.props.location.pathname === `/beers/${this.props.match.params.id}`) {
      this.setState({
        selectedBeer: this.props.findSelectedBeer(this.props.match.params.id)
      })
    } else {
      axios.get('https://ih-beer-api.herokuapp.com/beers/random')
        .then(result => this.setState({
          selectedBeer: result.data
        }))
    }
  }

  render() {
    console.log(this)
    return (

      <div>{this.state.selectedBeer &&
        <div>
          <Header />
          <div className="AboutBeer">
            <div className="img-div"><img src={this.state.selectedBeer.image_url} alt={this.state.selectedBeer.image_url}></img></div>
            <div><h1>{this.state.selectedBeer.name}</h1><span>{this.state.selectedBeer.first_brewed}</span></div>
            <div><span>{this.state.selectedBeer.tagline}</span><span>{this.state.selectedBeer.attenuation_level}</span></div>
            <p>{this.state.selectedBeer.description}</p>
          </div>
        </div>
      }</div>
    );
  }
}

export default AboutBeer;