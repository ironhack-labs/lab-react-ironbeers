import { useState, useEffect } from "react"
import beersService from "../services/beers.service"
import { useParams } from 'react-router-dom'
import Header from "./Header"
import { Card, Button } from 'react-bootstrap'


const BeerDetails = () => {

    const [beerDetails, setBeersDetails] = useState([])

    useEffect(() => {

        loadBeerDetails()

    }, [])

    const { beerId } = useParams()

    const loadBeerDetails = () => {


        beersService
            .getBeerbyId(beerId)
            .then(data => setBeersDetails(data))
            .catch(err => console.log(err))
    }



    // console.log()
    // console.log(beerDetails.data.attenuation_level)
    // console.log()
    // console.log(beerDetails.data.contributed_by)


    return (
        <>
            <Header />
            {
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={beerDetails.data.image_url} />
                    <Card.Body>
                        <Card.Title>{beerDetails.data.name}</Card.Title>
                        <Card.Text>
                            {beerDetails.data.description}
                        </Card.Text>
                        <Card.Text>
                            {beerDetails.data.tagline}
                        </Card.Text>
                        <Card.Text>
                            {beerDetails.data.attenuation_level}
                        </Card.Text>
                        <Card.Text>
                            {beerDetails.data.contributed_by}
                        </Card.Text>
                        <Card.Text>
                            {beerDetails.data.first_brewed}
                        </Card.Text>

                    </Card.Body>
                </Card>
            }

        </>
    )

}

export default BeerDetails