import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Link to="/beers">
        <figure>
          <img src="/images/beers.png" alt="All Beers" width="100%"/>
        </figure>
        <figcaption>
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam tempora molestias, culpa blanditiis quas tempore! Voluptatibus, tenetur dolores dignissimos ullam alias ipsum excepturi facere, sit repellat, dolorem dolore ab?</p>
        </figcaption>
      </Link>
      <Link to="/random-beer">
          <figure>
              <img src="/images/random-beer.png" alt="Random Beer" width="100%" />
          </figure>
          <figcaption>
                <h2>Random Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus suscipit expedita. Minima id commodi suscipit nulla consequuntur quibusdam aliquid quisquam officiis repellat assumenda doloribus, iste modi dolorem ratione obcaecati!</p>
          </figcaption>
      </Link>
      <Link to="/new-beer">
          <figure>
              <img src="/images/new-beer.png" alt="New Beer" width="100%" />
          </figure>
          <figcaption>
                <h2>New Beer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus suscipit expedita. Minima id commodi suscipit nulla consequuntur quibusdam aliquid quisquam officiis repellat assumenda doloribus, iste modi dolorem ratione obcaecati!</p>
          </figcaption>
      </Link>
    </div>
  )
}

export default Home
