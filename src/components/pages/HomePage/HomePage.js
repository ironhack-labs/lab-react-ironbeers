import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from './../../../assets/beers.png'
import newBeer from './../../../assets/new-beer.png'
import randomBeer from './../../../assets/random-beer.png'

export default function HomePage() {
  return (
    <Container style={{ minHeight: "100vh" }}>

      <h1>IronBeers</h1>
      
      <img src={ beers } alt="beers" />
      <Link to="/beers">
        <h3>All Beers</h3>
      </Link>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, numquam architecto maiores soluta veniam, blanditiis culpa voluptates non velit excepturi, cum accusamus obcaecati eos similique maxime dolores et? In, impedit!</p>

      <img src={newBeer} alt="new beer" />
      <Link to="/random-beer">
        <h3>Random Beer</h3>
      </Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quia iure, modi debitis distinctio officiis porro aliquid reiciendis deserunt explicabo officia veniam, in quod, ducimus delectus ut cum earum cumque!</p>

      <img src={randomBeer} alt="random beer" />
      <Link to="/new-beer">
        <h3>New Beer</h3>
      </Link>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor doloremque, saepe magni ratione perferendis, rerum vitae autem voluptates quia nihil, aut fuga commodi harum facere! In voluptate suscipit natus!</p>
     
    </Container>
  )
}
