import { useEffect, useState } from "react"
import AllBeersList from '../../components/AllBeersList/AllBeersList'
import NavbarHeader from './../../components/Navigation/Navbar'
import aleService from './../../services/beer.services'
import { Card, Button, Container, Row, Col } from "react-bootstrap"


const AllBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    },)

    const loadBeers = () => {
        aleService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="all-beers-page">

            <NavbarHeader></NavbarHeader>
            <Container>
                <Row>
                    <AllBeersList beers={beers} />
                </Row>
            </Container>


        </div>
    )
}

export default AllBeersPage


/* Iteration 3 | List all the beers
On the / beers route, we should display all the beers from the database.
So, in this case, you need to "hit" the API's route https://ih-beers-api2.herokuapp.com/beers 
and the API will return an array of beers.

Hint: The array of beers is array of objects.We strongly advise you to console log the response 
from the API so you can see the structure of it.

You should display the following from each of the beers:

image
name
tagline
contributed_by */