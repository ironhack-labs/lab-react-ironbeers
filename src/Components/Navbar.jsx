import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="App-header">
          <Link to="/">
              <p>🏠</p>
          </Link>
        </div>
  )
}

export default Navbar