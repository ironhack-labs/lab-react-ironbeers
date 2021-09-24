import React from "react";
import { Container } from "react-bootstrap";
import BeerDetails from "../BeerDetailsPage/BeerDetails";

function BeersPage() {
    return (
        <Container>
            <h1 className="text-center mt-3">Random Beer</h1>
            <BeerDetails type="random" />
        </Container>
    );
}

export default BeersPage;