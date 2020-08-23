import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  

  return (
    <section>

      <article>
        <Link to='/beers'><img src= 'images/AllBeers.jpg' alt=''/></Link>
        <div>
          <h2>All Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum malesuada nibh ut aliquet. Curabitur elementum est et scelerisque consequat. Maecenas tristique porta arcu ut eleifend. Ut elementum mi eget urna rhoncus rhoncus. Donec tempor quis nisi ut semper.</p>
        </div>
      </article>

      <article>
      <Link to='/beer/random'><img src= 'images/RandomBeer.jpg' alt=''/></Link>
        <div>
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum malesuada nibh ut aliquet. Curabitur elementum est et scelerisque consequat. Maecenas tristique porta arcu ut eleifend. Ut elementum mi eget urna rhoncus rhoncus. Donec tempor quis nisi ut semper.</p>
        </div>
      </article>

      <article>
      <Link to='/new-beer'><img src= 'images/NewBeer.png' alt=''/></Link>
        <div>
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum malesuada nibh ut aliquet. Curabitur elementum est et scelerisque consequat. Maecenas tristique porta arcu ut eleifend. Ut elementum mi eget urna rhoncus rhoncus. Donec tempor quis nisi ut semper.</p>
        </div>
      </article>
    </section>
  )
}
