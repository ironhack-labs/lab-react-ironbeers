import React from "react";
import HomePageCard from "./HomePageCard";
import beers from "./../../../assets/beers.png"
import randomBeer from "./../../../assets/random-beer.png"
import newBeer from "./../../../assets/new-beer.png"
import { Link } from "react-router-dom";
import {Row, Col, Container} from "react-bootstrap"


function HomePage() {
    return ( 
        <Container className="mt-4">
            <Row className="homePage justify-content-md-center">
                <Col md={"4"} xs={"12"}>
                    <Link className="link" to="/beers">
                        <HomePageCard img={beers} title="All beers" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem ab ad debitis. Optio, architecto"/>
                    </Link>
                </Col>
                <Col md={"4"} xs={"12"}>
                    <Link className="link" to="/random">
                        <HomePageCard img={randomBeer} title="Random beer" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem ab ad debitis. Optio, architecto" />
                    </Link>
                </Col>
                <Col md={"4"} xs={"12"}>
                    <Link className="link" to="/new-beer">
                        <HomePageCard img={newBeer} title="New beer" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet exercitationem ab ad debitis. Optio, architecto" />
                    </Link>
                </Col>
            </Row>
        </Container>
     );
}

export default HomePage;