
import React from 'react'

import Navbar from 'react-bootstrap/Navbar'



const Navigation = () => {

    return (
      <Navbar bg="primary">
        <Navbar.Brand href="/" >
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/52/29/house-beer-logo-icon-design-vector-22545229.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Beer logo"
          />
        </Navbar.Brand>
      </Navbar>
    );
}

export default Navigation