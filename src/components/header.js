import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Link to="/">
          <img src="/images/header.jpg" alt="bar counter"/>
      </Link>
    </div>
  )
}

export default Header