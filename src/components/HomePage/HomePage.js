import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beerimg from './../../assets/beers.png'
import randimg from './../../assets/random-beer.png'
import creatimg from './../../assets/new-beer.png'
import './HomePage.css'

export default function HomePage() {
  return (
    <Container >
            <h1>Bienvenid@ Iron Beer</h1>
            <div>
            <Link className='link' to="/beers">
                <img src={beerimg} alt="beers"/>
                <h1>All Beers</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, placeat 
                itatibus? Incidunt molestiae aperiam possimus debitis consequuntur, repellendus 
                atque explicabo odit quod similique saepe quos quisquam molestias dicta 
                quaerat voluptate.</p>
            </Link>
            </div>
            <div>
            <Link className='link' to="/random-beers">
                <img src={randimg} alt="random-beers"/>
                <h1>Random Beer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, placeat 
                itatibus? Incidunt molestiae aperiam possimus debitis consequuntur, repellendus 
                atque explicabo odit quod similique saepe quos quisquam molestias dicta 
                quaerat voluptate.</p>
            </Link>
            </div>
            <div>
            <Link className='link' to="/new-beer">
                <img src={creatimg} alt="new-beers"/>
                <h1>All Beers</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, placeat 
                itatibus? Incidunt molestiae aperiam possimus debitis consequuntur, repellendus 
                atque explicabo odit quod similique saepe quos quisquam molestias dicta 
                quaerat voluptate.</p>
            </Link>
            </div>
    </Container>
  )
}
