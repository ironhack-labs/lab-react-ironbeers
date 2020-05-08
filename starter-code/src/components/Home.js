import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div>
        <Link to={`/beers`}>
          <img src="../images/beers.png" alt="" />
        </Link>
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus ab voluptatem
          vitae tempore aut. Veniam, inventore, voluptate hic voluptates ducimus corrupti adipisci
          aliquid quam quos incidunt quibusdam quia animi!
        </p>
      </div>

      <div>
        <Link to={`/random-beer`}>
          <img src="../images/random-beer.png" alt="" />
        </Link>
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus ab voluptatem
          vitae tempore aut. Veniam, inventore, voluptate hic voluptates ducimus corrupti adipisci
          aliquid quam quos incidunt quibusdam quia animi!
        </p>
      </div>

      <div>
        <Link to={`/new-beer`}>
          <img src="../images/new-beer.png" alt="" />
        </Link>
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus ab voluptatem
          vitae tempore aut. Veniam, inventore, voluptate hic voluptates ducimus corrupti adipisci
          aliquid quam quos incidunt quibusdam quia animi!
        </p>
      </div>
    </div>
  )
}

export default Home
