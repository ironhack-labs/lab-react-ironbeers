import React from "react";
import { Container, Navbar } from "react-bootstrap";


export default function Header (){
    
    return(
        <Navbar bg="dark" expand="md" className="mb-5">
            <Container>
                <Navbar.Brand href="/">Icon Home</Navbar.Brand>
            </Container>
        </Navbar>
    )
}