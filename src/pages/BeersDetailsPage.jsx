import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import apiService from "../services/api.services"


const BeerDetailsPage = () => {

    const [beers, setBeers] = useState({})

    const { beer_id } = useParams()

     useEffect(() => {
        apiService
            .getOneBeer(beer_id)
            .then(( data ) => setBeers(data))
            .catch(err => console.error(err))
     }, [])
    
    console.log(beers)

    return (
        <>
            {
                !beers
                    ?
                    <Container>
                        <h1 className="mb-4">Detalles </h1>
                        <hr />

                        <Row>
                            <h3>Especificaciones</h3>
                            <p>{ beers.name}</p>
                            <hr />

                            <Link to="/beers">
                                <Button as="div" variant="dark">Back to List</Button>
                            </Link>
                        </Row>
                    </Container >
                    :
                    '404'
            }
         </>
    )
}

export default BeerDetailsPage