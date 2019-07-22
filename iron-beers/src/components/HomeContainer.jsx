import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
  </ul>
)

const HomeContainer = () => {
  return (
    <div className="home-container">
      <Link to={'/beers'}>
        <section>
          <img src="./img/beers.png" alt="All Beers" />
          <h2>All Beers</h2>
          <p>
            Quaerat aut quo cumque, magnam voluptatem sapiente repudiandae quos cupiditate inventore soluta incidunt
            atque pariatur veniam corrupti architecto excepturi aliquid vero odio.
          </p>
        </section>
      </Link>
      <section>
        <img src="./img/random-beer.png" alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>
          Explicabo suscipit facere recusandae nostrum sint tempore laudantium perferendis ea doloribus non. Nam
          corporis eligendi dolorum totam veniam fugit praesentium deleniti enim.
        </p>
      </section>
      <section>
        <img src="./img/new-beer.png" alt="New Beer" />
        <h2>New Beer</h2>
        <p>
          Enim illo soluta consectetur id ut maiores praesentium itaque provident, veniam explicabo, neque labore
          dignissimos assumenda. Maxime inventore omnis ad explicabo reprehenderit!
        </p>
      </section>
    </div>
  )
}

export default HomeContainer
