import reactDom from "react-dom"
import { Container, Button, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import beersService from '../../services/beers.service'

const RandomBeerPage = ({}) => {


    // const [randomBeer, setRandomBeer] = useState(0)

    

    // const generateRandomBeer = () => {
    //     const getRandomBeer = Math.floor(Math.random() * length);
    //     setRandomBeer(randomBeer)
    // }

    return (
        <Container>
            <h1>Random Beer page</h1>
            <hr />
            
        </Container>
    )
}

export default RandomBeerPage