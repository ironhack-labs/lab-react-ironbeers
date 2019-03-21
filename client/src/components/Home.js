import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';


const Home = () => {
  return (

    <div className="home-page-container">
        <Nav />

        <section className="home-page">

          <article  className="all-beers">
            <img src="https://budapestbylocals.b-cdn.net/wp-content/uploads/2016/11/hungarian_craft_beers.jpg" alt="all beers image" />
            <h2><Link to={`/beers`}>All Beers</Link></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti culpa maiores illum in ut quis rerum voluptates, aperiam recusandae, nulla ipsa voluptas molestiae laborum odit ipsum voluptatibus beatae facere.</p>
          </article>

          <article  className="random-beer">
            <img src="https://budapestbylocals.b-cdn.net/wp-content/uploads/2016/11/hungarian_craft_beers.jpg" alt="random-beer image" />
            <h2><Link to={`/random-beer`}>Random</Link></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti culpa maiores illum in ut quis rerum voluptates, aperiam recusandae, nulla ipsa voluptas molestiae laborum odit ipsum voluptatibus beatae facere.</p>
          </article>

          <article  className="new-beer">
            <img src="https://budapestbylocals.b-cdn.net/wp-content/uploads/2016/11/hungarian_craft_beers.jpg" alt="new-beer image" />
            <h2><Link to={`/new-beer`}>New Beer</Link></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deleniti culpa maiores illum in ut quis rerum voluptates, aperiam recusandae, nulla ipsa voluptas molestiae laborum odit ipsum voluptatibus beatae facere.</p>
          </article>

        </section>


    </div>

   
  )
}


export default Home