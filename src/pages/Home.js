import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">

          <Link to='/beers'>
            <div className="card bg-dark text-white">
              <img src="https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" className="card-img" alt="Picture of a Beer"/>
              <div className="card-img-overlay">
                <h5 className="card-title">All Beers</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Link>

          <Link to='/beers/random'>
            <div className="card bg-dark text-white">
              <img src="https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" className="card-img" alt="Picture of a Beer"/>
              <div className="card-img-overlay">
                <h5 className="card-title">Random Beer</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Link>

          <Link to='/beers/new'>
            <div className="card bg-dark text-white">
              <img src="https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" className="card-img" alt="Picture of a Beer"/>
              <div className="card-img-overlay">
                <h5 className="card-title">Create New Beer</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Home