import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap'
import './../App.css'



const HomePage = () => {
    return (
        <Container className="homePage">
            <hr></hr>
            <h1>Welcome!</h1>
            <h3>You can see our complete list of beers, choose a random beer or add your own!</h3>
            <hr></hr>
        </ Container>

    )
}

export default HomePage