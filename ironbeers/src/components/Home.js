  
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {

  constructor (){
    super()
    this.state = {}
  }

  render () {
    return (
      <div className="container home">
          <h1>Home Page</h1>
          <article>
              <img src="../img/beers.png" alt="beers"></img>
              <Link className="link" to="/Beers">Beers</Link>
          </article>
          <article>
              <img src="../img/random-beer.png" alt="Random beer"></img>
              <Link className="link" to="/random">Random Beer</Link>
          </article>
          <article>
              <img src="../img/new-beer.png" alt="new beer"></img>
              <Link className="link" to="/new_beer">New Beer</Link>
          </article>

      </div>
    )
  }
}

export default Home