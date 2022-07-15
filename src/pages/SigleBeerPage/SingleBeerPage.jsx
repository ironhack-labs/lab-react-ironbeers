import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import beersService from "../../services/beers.services"
import { Card, Container } from 'react-bootstrap'

const SingleBeer = () => {

    const { id } = useParams
    const [singleBeer, setSingleBeer] = useState([])

    console.log(singleBeer)

    useEffect(() => {
        beersService
            .getOneBeer(id)
            .then(({ data }) => { setSingleBeer(data) })
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Beer details</h1>
            <hr />

            <Card>
                <Card.Img variant="top" src={singleBeer.image_url} />
                <Card.Body>
                    <Card.Title>{singleBeer.name}</Card.Title>
                    <Card.Subtitle >{singleBeer.tagline}</Card.Subtitle>
                    <Card.Text>{singleBeer.description}</Card.Text>
                    <Card.Subtitle>{singleBeer.contributed_by}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SingleBeer