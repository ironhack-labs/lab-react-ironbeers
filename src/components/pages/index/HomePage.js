import React from 'react'
import { Container, Row } from 'react-bootstrap'
import HomeCard from './HomeCard'
import allBeersImage from './beers.png'
import randomBeerImage from './random-beer.png'
import newBeerImage from './new-beer.png'

const HomePage = () => {
    return (
        <Container>
            <Row>
                <HomeCard imageUrl={allBeersImage} title='All Beers' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' link='beers'/>
                <HomeCard imageUrl={randomBeerImage} title='Random Beer' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' link='random'/>
                <HomeCard imageUrl={newBeerImage} title='New Beer' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.' link='new-beer'/>
            </Row>
        </Container>
    )
}

export default HomePage