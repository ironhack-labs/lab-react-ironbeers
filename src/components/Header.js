import React from 'react'
import { Link } from 'react-router-dom'
import { House } from 'react-bootstrap-icons'

const Header = () => {

  return (
    <div className='d-flex bg-info justify-content-center align-items-center' style={{height: "80px"}}>
      <Link to="/"><House color="white" size={50} /></Link>
    </div>
  )
}

export default Header