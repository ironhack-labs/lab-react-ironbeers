import React, { Component } from 'react'

import './home.css'

import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <section>
        <h1>IronBeers</h1>
        <article>
          <Link to="/beers">
            <img src="./../../../images/beers.png" alt="Beers" />
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem fistrum no te digo trigo por no llamarte Rodrigor amatomaa
            tiene musho peligro no te digo trigo por no llamarte Rodrigor.
            Fistro pupita a wan te voy a borrar el cerito no puedor qué dise
            usteer ese hombree ese hombree quietooor.
          </p>
        </article>
        <article>
          <img src="./../../../images/new-beer.png" alt="New Beer" />
          <h2>New Beer</h2>
          <p>
            Lorem fistrum no te digo trigo por no llamarte Rodrigor amatomaa
            tiene musho peligro no te digo trigo por no llamarte Rodrigor.
            Fistro pupita a wan te voy a borrar el cerito no puedor qué dise
            usteer ese hombree ese hombree quietooor.
          </p>
        </article>
        <article>
          <img src="./../../../images/random-beer.png" alt="Random Beer" />
          <h2>Random Beer</h2>
          <p>
            Lorem fistrum no te digo trigo por no llamarte Rodrigor amatomaa
            tiene musho peligro no te digo trigo por no llamarte Rodrigor.
            Fistro pupita a wan te voy a borrar el cerito no puedor qué dise
            usteer ese hombree ese hombree quietooor.
          </p>
        </article>
      </section>
    )
  }
}

export default Home
