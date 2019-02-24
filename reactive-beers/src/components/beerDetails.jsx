import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BeerDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      beer: {}
    }
  }

  componentDidMount() {

    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(response => {
        const beerId = this.props.match.params.beerId;
        const beer = response.data.filter(beer => {
          return beer._id === beerId;
        })[0]
        this.setState({ beer })
      })
  }


  render() {
    console.log(this.state.beer)
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>Beer Details</h1>
        <p>Name: {this.state.beer.name}</p>
        <img src={this.state.beer.image_url} alt='' />
        <p>{this.state.beer.tagline}</p>
        <p>Description: {this.state.beer.description}</p>
        <p>Attenuation level: {this.state.beer.attenuation_level}</p>
        <p>Brewer tips: {this.state.beer.brewer_tips}</p>
        <p>First brewed on {this.state.beer.first_brewed}</p>
        <p>Contributed by: {this.state.beer.contributed_by}</p>
      </div>
    )
  }
}
