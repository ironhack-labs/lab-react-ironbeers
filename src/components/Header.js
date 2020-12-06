import React from 'react';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
        <Col className="header">
            <Link to ="/"><img src="../home54x54.png" alt="home" /></Link>
        </Col>
    </>
  );
}

export default Header;