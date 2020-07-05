import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import axios from 'axios'

class Beers extends Component{
  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => {
        this.setState({
          beers: res.data
        })
    })
  }

  showTheBeers () {
    return this.state.beers.map((eachBeer,i) => {
      return <Link key={i} to={"/beers/" + eachBeer._id}><li>{eachBeer.name}</li></Link>
    })
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <ul>
          {this.showTheBeers()}
        </ul>
      </div>
    )
  }
}

export default Beers;