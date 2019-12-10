import React from 'react'
import { Link } from 'react-router-dom';

export default function Body() {
  return (
    <div className="home">
      <section>
        <Link to="/beers">
          <img src="./images/beers.png" alt=""/>
        </Link>
          <div className="section-content">
            <h3>All Beers</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima suscipit laborum ipsa odio veritatis, dolor tempore doloribus sunt. Rerum ipsum iusto perferendis delectus aliquid neque ea at ullam ut natus?</p>
          </div>
      </section>

      <section>
        <Link to="/random-beer">
          <img src="./images/random-beer.png" alt=""/>        
        </Link>
          <div className="section-content">
            <h3>Random beer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, perspiciatis minus excepturi sit earum, fuga adipisci cupiditate dolor voluptas nesciunt magni cum? Magnam dignissimos autem aspernatur sint eum recusandae veniam.</p>
        </div>
      </section>

      <section>
        <Link to="/new-beer">
          <img src="./image/new-beer" alt=""/>
        </Link>
        <div className="section-content">
          <h3>New beer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis rem id enim ipsa, alias nemo doloribus ex similique, ab repudiandae odit, vel quidem ea sapiente? Officia non numquam ab tempore!</p>
        </div>
      </section>
    </div>
  )
}
