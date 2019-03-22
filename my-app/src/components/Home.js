import React from 'react'
import {Link} from 'react-router-dom'
import NavBar from './NavBar';

export default function Home() {
  return (

    <section className="home-page">
      <NavBar />

      <article className="article1">
        <img src="/cerveza1.jpg" alt=""/>
        <h2><Link to={`/beers`}>All Beers</Link></h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti culpa maiores illum in ut quis rerum voluptates, aperiam recusandae, nulla ipsa voluptas molestiae laborum odit ipsum voluptatibus beatae facere.</p>
      </article>

      <article className="article2">
        <img src="/cerveza1.jpg" alt=""/>
        <h2><Link to={`/random-beer`}>Random Beer</Link></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti culpa maiores illum in ut quis rerum voluptates, aperiam recusandae, nulla ipsa voluptas molestiae laborum odit ipsum voluptatibus beatae facere.</p>
      </article>

      <article className="article3">
        <img src="/cerveza1.jpg" alt=""/>
        <h2><Link to={`/new-beer`}>New Beer</Link></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti culpa maiores illum in ut quis rerum voluptates, aperiam recusandae, nulla ipsa voluptas molestiae laborum odit ipsum voluptatibus beatae facere.</p>
      </article>


    </section>
  )
}
