import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const homePath = "../assets/home-icon.png"

  return (
    <div className='bg-info' style={{height: "80px"}}>
      <Link to="/"><img src={homePath} alt="home" /></Link>
    </div>
  )
}

export default Header