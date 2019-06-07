import React from 'react'
import { Link } from 'react-router-dom'
import logoHome from '../svg/web-house-.svg'

const Header = () =>

  <Link className="btn btn-primary btn-lg btn-block" to={'/'} >
    <img src={logoHome} alt='logo-home'></img>
  </Link>

export default Header
