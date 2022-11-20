 import React from 'react'
import { Link } from 'react-router-dom'
import randomBeerImg from "../assets/random-beer.png"
import newBeerImg from '../assets/new-beer.png'
import AllBeersImg from "../assets/beers.png"


function HomePage() {
  return (
    <div>
        <Link to={`/random-beer/random`}>
        <img src={randomBeerImg} alt="Random Beers"/>
        <h2>Random Beers</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
        </Link>

        <Link to="/new-beer">
        <img src={newBeerImg} alt="New Bear"/>
        <h2>New Beer</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>    
        </Link>

        <Link to="/all-beers">
        <img src={AllBeersImg} alt="All Beers"/>
        <h2>All Beers</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
        </Link>


    </div>
  )
}

export default HomePage 

