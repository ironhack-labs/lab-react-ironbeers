import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios' 

export default class Home extends Component {

  state= {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            //console.log('my response.deta: ', response.data[0].name)
            this.setState({
                beers: response.data
            })
        })
  }

  handleRandom = () => {
    //let newBeerList = [...this.state.beer]
    let randomBeer = this.state.beers[Math.floor(Math.random() * this.state.beers.length)]
    console.log('this.state.beers is: ', this.state.beers)
    //console.log('my random beer is :', randomBeer._id)
    console.log('1 beer :', this.state.beers[1])
    //let beerId = randomBeer._id

    //randomBeer._id = this.state.beer._id

    this.setState({
      beer: randomBeer
    })
  }



  render() {
    return (
      <div className="App">
      
        <Link to={`/beers`}>All Beers</Link>
        <br />
        <Link to={`/random-beer`} onClick={this.handleRandom}>Random Beer</Link>
        <br />
        <Link to={`/NewBeer`}>New Beer</Link>
    </div>
    )
  }
}




