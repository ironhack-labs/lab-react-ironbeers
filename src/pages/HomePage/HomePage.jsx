import React from "react"
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from './../../assets/beers.png'
import randomBeer from './../../assets/random-beer.png'
import newBeers from './../../assets/new-beer.png'

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Link to='/beers'>
                    <img src={beers} alt="Beers" />
                    <h2>Beers</h2>
                </Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus cum amet,<br />
                    iste magnam at eveniet iure sequi nam nemo laudantium placeat aliquam facilis! Aperiam eum <br />
                    exercitationem hic inventore. Placeat.</p>
            </Row>
            <Row>
                <Link to='/random-beer'>
                    <img src={randomBeer} alt="randomBeer" />
                    <h2>Random Beer</h2>
                </Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus cum amet,<br />
                    iste magnam at eveniet iure sequi nam nemo laudantium placeat aliquam facilis! Aperiam eum <br />
                    exercitationem hic inventore. Placeat.</p>
            </Row>
            <Row>
                <Link to='/new-beer'>
                    <img src={newBeers} alt="newBeer" />
                    <h2>New Beer</h2>
                </Link>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti temporibus cum amet,<br />
                    iste magnam at eveniet iure sequi nam nemo laudantium placeat aliquam facilis! Aperiam eum <br />
                    exercitationem hic inventore. Placeat.</p>
            </Row>
        </Container>
    )
}

export default HomePage