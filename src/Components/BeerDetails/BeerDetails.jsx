import { Card, Image } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import beersService from "../../service/beerServices"


const BeerDetails = () => {


    const [beer, setBeer] = useState({})
    const { id } = useParams()


    console.log(id)
    useEffect(() => {
        findBeer()
    }, [])


    const findBeer = () => {

        if (id) {
            beersService
                .getOneBeer(id)
                .then(({ data }) => setBeer(data))
                .catch(err => console.log(err))
        }
        else {
            beersService
                .getRandomBeer()
                .then(({ data }) => setBeer(data))
                .catch(err => console.log(err))
        }
    }


    return (

        <Card>
            <Image width={300} fluid src={beer.image_url} />
            <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{beer.attenuation_level}</Card.Subtitle>
                <Card.Text>
                    {beer.tagline}
                </Card.Text>
                <Card.Text>
                    {beer.description}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">First brewed by {beer.contributed_by} on {beer.first_brewed}</Card.Subtitle>
            </Card.Body>
        </Card>

    )
}

export default BeerDetails 