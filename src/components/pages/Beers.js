  
import { Container } from 'react-bootstrap'
import React from 'react'
import Header from './../layout/Header'
import BeerList from './ListBeers'
import './ListBeers.css'




const Beers = () => {

    return(

        <Container>
            <Header/>
            <BeerList/>
        </Container>
    )
}

export default Beers