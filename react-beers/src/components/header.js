import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return(
    <div>
      <Link to="/" className="btn btn-primary">
        Inicio
      </Link>
    </div>
  )
}