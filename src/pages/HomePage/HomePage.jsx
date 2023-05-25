import './HomePage.css'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col } from "react-bootstrap"

import AllBeersCard from '../../components/HomePageCards/AllBeersCard'
import RandomBeerCard from '../../components/HomePageCards/RandomBeerCard'
import NewBeerCard from '../../components/HomePageCards/NewBeerCard'


const HomePage = () => {

    return (

        <Container>

            <AllBeersCard></AllBeersCard>
            <RandomBeerCard></RandomBeerCard>
            <NewBeerCard></NewBeerCard>

        </Container>

    )
}

export default HomePage