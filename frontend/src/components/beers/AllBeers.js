import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header';


class AllBeers extends Component {
  state ={
    beers:[]
  }

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers', {})
      .then(({ data }) => {
        this.setState({ beers: data })
      })
      .catch(error => error)
  }

  render(){
    const { beers } = this.state
    return (
      <section id="container">
      <Header/>
      <div>
        {beers.map(e => (
            <p key={e._id}>{e.name}</p>
          ))}
      </div>
      </section>
    )
  }
}


export default AllBeers