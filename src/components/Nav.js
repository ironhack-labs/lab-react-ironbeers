import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to='/'>
          <span className="navbar-brand mb-0 h1 navbar">IronBeers</span>
        </Link>
      </div>
    </nav>
  )
}
