import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import WithNavbar from "../WithNavbar/WithNavbar"


const ListBeers = () => {
    const [beers, setBeers] = useState({})


    useEffect(() => {
        const loadBeers = () => {
            axios
                .get("https://ih-beers-api2.herokuapp.com/beers")
                .then(data => {
                    setBeers(data)
                })
        }

        loadBeers()
    }, [])
    console.log(beers)

    return (
        <WithNavbar>
            

            <Row >
            {beers.data?.map(beer => {
                return (
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Link to={`/beers/${beer._id}`}>
                            <Card.Img className="m-auto" variant="top" src={beer.image_url} style={{ width: "100px", maxHeight: "200px", objectFit: "contain" }} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{beer.name}</Card.Title>
                            <Card.Text>{beer.tagline}</Card.Text>
                            <Card.Text>Created By: {beer.contributed_by}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                )
            })}
            </Row>

        </WithNavbar>
    )
}

export default ListBeers