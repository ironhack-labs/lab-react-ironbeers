import React from 'react'
import { Link } from 'react-router-dom'
import home from './../../../assets/home.png'
import './Header.css'

export default function HomePage() {
  return (
    <header className="blue-bg">
      <Link to="/">
        <img src={home} alt="home" />
      </Link>
    </header>
  )
}