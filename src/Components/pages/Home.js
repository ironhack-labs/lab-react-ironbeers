import { Route, Switch, Link } from "react-router-dom"
import React from 'react';
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import { Container, Row } from "react-bootstrap";
import allbeers from './../../assets/beers.png'
import newbeer from './../../assets/new-beer.png'
import randombeer from './../../assets/random-beer.png'
import SelectedBeer from "./SelectedBeer";








const Home = () => {

    return (

        <>
            <Container>
                <Row >
                    <a href="/beers" exact render={(props) => <AllBeers {...props} />}>
                        <article>
                            <img src={allbeers} alt='All Beers' />
                            <h3>All Beers</h3>
                            <p>lorem ipsum</p>
                        </article>
                    </a >
                </Row>
                <Row>
                    <a href="/new" render={(props) => <RandomBeer {...props} />}>
                        <article>
                            <img src={newbeer} alt='New Beer' />
                            <h3>New Beer</h3>
                            <p>lorem ipsum</p>
                        </article>
                    </a>
                </Row>
                <Row>
                    <a href="/random/:beer_id" render={(props) => <NewBeer {...props} />}>
                        <article>
                            <img src={randombeer} alt='Random Beer' />
                            <h3>Random Beer</h3>
                            <p>lorem ipsum</p>
                        </article>
                    </a >
                </Row>
            </Container>
        </>
    )
}

export default Home