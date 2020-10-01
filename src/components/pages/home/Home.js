import React from 'react'

import HomeCard from './HomeCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './Home.css'

const Home = () => {
    return (
        <Container fluid className='home-cards'>
            <Row>
                <HomeCard link='/beers' image='https://i.pinimg.com/originals/69/07/0b/69070be018c7cd71d44a73cc9c35add2.jpg' title='All Beers' />
                <HomeCard link='/random-beer' image='https://i.pinimg.com/originals/69/07/0b/69070be018c7cd71d44a73cc9c35add2.jpg' title='All Beers'/>
                <HomeCard link='/new-beer' image='https://i.pinimg.com/originals/69/07/0b/69070be018c7cd71d44a73cc9c35add2.jpg' title='New Beer'/> 
            </Row>    
        </Container>
    )
}

export default Home