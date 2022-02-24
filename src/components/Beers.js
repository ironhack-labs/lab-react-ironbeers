import beersService from "../services/beers.service"
import { useState, useEffect } from "react"
import Header from "./Header"
import { Card } from 'react-bootstrap'
import { Link } from "react-router-dom"



const Beers = () => {

    const [beersList, setBeersList] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {

        beersService
            .getAllBeers()
            .then(({ data }) => setBeersList(data))
            .catch(err => console.log(err))

    }

    return (
        <>
            <Header />
            {
                beersList.map(elm => {
                    return (
                        <Card key={elm._id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={elm.image_url} />
                            <Card.Body>
                                <Card.Title>{elm.name}</Card.Title>
                                <Card.Text>
                                    Contributed by: {elm.contributed_by}
                                </Card.Text>
                                <Card.Text>
                                    {elm.tagline}
                                </Card.Text>

                                <Link to={`/beers/${elm._id}`}> Detalles de la cerveza

                                </Link>

                            </Card.Body>
                        </Card>
                    )
                })
            }

        </>


    )



}

export default Beers