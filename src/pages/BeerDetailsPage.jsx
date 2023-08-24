import { useEffect, useState } from "react"
import beersService from "../services/beers.services"
import { useParams } from "react-router-dom"
import { Card } from "react-bootstrap"

const BeerDetailsPage = () =>{

    const { beer_id } = useParams()

    console.log(beer_id)

    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeerDetails()
    }, [])

    const loadBeerDetails = () => {
        beersService
            .getBeersDetails(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    console.log(beer)

    return(
        <>
        <Card className="text-center">
       

            <Card.Body>
                <Card.Title><h1>{beer.name}</h1></Card.Title>
            <Card.Title>
            <Card.Img variant="top" src={beer.image_url} className="w-25" />
            </Card.Title>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>
                {beer.tagline}
                </Card.Text>
                <Card.Text>{beer.first_brewed}</Card.Text>
                <Card.Text>{beer.attenuation_level}</Card.Text>
                <Card.Text>{beer.description}</Card.Text>
                <Card.Text>{beer.contributed_by}</Card.Text>
                <Card.Text>{beer.contributed_by}</Card.Text>
                    
                    
                    
               
            </Card.Body>
        </Card>
        </>
        )

    }

export default BeerDetailsPage;
