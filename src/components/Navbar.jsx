import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    <div>

<Link to={"/"}>
        {" "}
        <div className='home'>
            <Button variant="primary" size="lg">Home</Button>
            </div>
        </Link>
        

    </div>
  )
}

export default Navbar