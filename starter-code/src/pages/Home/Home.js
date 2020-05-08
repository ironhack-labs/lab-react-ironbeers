import React, { Component } from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import axios from 'axios'
import apiServices from '../../services/apiServices'
import { Link } from 'react-router-dom'

// Me gustaria saber como importo un resource que este alojado fuera de src, porque me parece imposible:
//Module not found: You attempted to import ../../components/homeCards/HomeCard which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
import HomeCard from '../../components/homeCards/HomeCard'
import beerImg from '../../images/beers.png'
import newBeerImg from '../../images/new-beer.png'
import randomBeerImg from '../../images/random-beer.png'



class Home extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Link to='/beers' className='home-card-link'>
                        <HomeCard
                        img={beerImg}
                        title={'All Beers'}
                    />
                    </Link>
                </Row>
                <Row>
                   <Link to='/random-beer' className='home-card-link'>
                        <HomeCard
                        img={newBeerImg}
                        title={'Random Beer'}
                    />
                   </Link>
                </Row>
                <Row>
                    <Link to='/new-beer' className='home-card-link'>
                        <HomeCard
                        img={randomBeerImg}
                        title={'New Beer'}
                    />
                    </Link>
                </Row>
            </Container>
        )
    }
}

export default Home