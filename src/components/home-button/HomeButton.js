import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeButton() {
  return (

    <Link className="btn btn-primary" to="/" role="button"><i className='fa fa-home'></i></Link>

  )
}
