import React from 'react'
import Container from "react-bootstrap/Container";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  // const handleRedirect = () => {
  //   window.location.href = "/";
  // }

  return (
    <Container fluid className="bg-primary d-flex justify-content-center">
      <Link to={"/"} style={{cursor: "pointer"}}>
        <h3><FiHome className="text-white"/></h3>
      </Link>
    </Container>
  )
}

export default Header
