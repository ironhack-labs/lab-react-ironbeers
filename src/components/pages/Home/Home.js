import React from 'react'
import "./Home.css"
import Option from "../../Option"
import { Container } from "react-bootstrap"

import beers from "./../../../assets/beers.png"
import randomBeer from "./../../../assets/random-beer.png"
import newBeer from "./../../../assets/new-beer.png"

const Home = () => {
    return (
        <Container>
            <Option
                url="/beers"
                image={beers}
                title="All Beers"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Option
                url="/random-beer"
                image={randomBeer}
                title="Random Beer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Option
                url="/new-beer"
                image={newBeer}
                title="New Beer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
        </Container>
    )
}

export default Home