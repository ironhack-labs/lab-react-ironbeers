
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from './../../../assets/beers.png'
import newBeer from './../../../assets/new-beer.png'
import randomBeer from './../../../assets/random-beer.png'
import './../../App.css'

const IndexPage = () => {

    return (

        <Container>

            <Link to="/beers" style={{ textDecoration: 'none', color: 'black' }}><img src={beers} width={"100%"} alt='beers' className="beers" />

                <div><h2>All Beers</h2><p style={{ textAlign: 'justify' }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  </p></div>
            </Link>

            <Link to="/random-beer" style={{ textDecoration: 'none', color: 'black' }}><img src={newBeer} width={"100%"} alt='beers' className="beers" />

                <div><h2>Random Beer</h2><p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p></div>
            </Link>
            <Link to="/new-beer" style={{ textDecoration: 'none', color: 'black' }}><img src={randomBeer} width={"100%"} alt='beers' className="beers" />

                <div><h2>New Beer</h2><p style={{ textAlign: 'justify' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p></div>
            </Link>


        </Container >
    )
}

export default IndexPage