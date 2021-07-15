import { Route, Switch, Link } from "react-router-dom"
import React from 'react';
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import { Container, Row } from "react-bootstrap";
import allbeers from './../../assets/beers.png'
import newbeer from './../../assets/new-beer.png'
import randombeer from './../../assets/random-beer.png'









const Home = () => {

    return (

        <>
            <Container>
                <Row >
                    <a href="/beers" exact render={(props) => <AllBeers {...props} />}>
                        <article>
                            <img src={allbeers} alt='All Beers' />
                            <h3>All Beers</h3>
                            <p>Aquí un listado de todas esas cervecitas ricas fresquitas</p>
                        </article>
                    </a >
                </Row>
                <Row>
                    <a href="/beers/new" render={(props) => <RandomBeer {...props} />}>
                        <article>
                            <img src={newbeer} alt='New Beer' />
                            <h3>New Beer</h3>
                            <p>Crea la tuya propia!! maestro cervecero incoming...</p>
                        </article>
                    </a>
                </Row>
                <Row>
                    <a href="/beers/random/" render={(props) => <NewBeer {...props} />}>
                        <article>
                            <img src={randombeer} alt='Random Beer' />
                            <h3>Random Beer</h3>
                            <p>Para los indecisos</p>
                        </article>
                    </a >
                </Row>
            </Container>
        </>
    )
}

export default Home