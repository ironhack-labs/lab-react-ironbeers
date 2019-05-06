import React, { Component } from 'react'
import axios from 'axios';

export default class BeerDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: null
    }
  }
  render() {
    if (!this.state.beer) 
      return <div>Loading...</div>
    
    return (
      <div className="BeerDetail">
        <h2>Beer Detail</h2>
        <img src={this.state.beer.image_url} alt="Beer Image"/>
        <h3>{this.state.beer.name}</h3>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.description}</p>
      </div>
    )
  }
  componentDidMount() {
    // We have a `this.props.match.params.id` because of the code in App.js
    // <Route path="/beer-detail/:id" exact component={BeerDetail} />
    console.log(this.props.match.params.id)
    axios.get("https://ironbeerapi.herokuapp.com/beers/single/"+this.props.match.params.id)
      .then(response => {
        this.setState({
          beer: response.data
        })
      })
  }
}
