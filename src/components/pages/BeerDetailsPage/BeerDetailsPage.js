import React from "react";
import { Container } from "react-bootstrap";
import BeerDetails from "./BeerDetails"

function BeersPage(props) {
    return (
        <Container>
            <h1 className="text-center">Details of the beer</h1>
            <BeerDetails type="details" {...props}/> 
        </Container>
    );
}

export default BeersPage;