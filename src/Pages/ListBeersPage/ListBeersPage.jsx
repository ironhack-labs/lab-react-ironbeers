import { Link } from "react-router-dom"
import home from "../../assets/kindpng_608406.png"
import { Card, Button, Navbar, Container } from 'react-bootstrap/'
import { useEffect, useState } from "react"
import axios from "axios"
import Nav from "../../components/Navbar/Navbar"


const ListBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => setBeers(response.data))
    }, [])

    return (
        <div>

            <Nav />

            <h1>List of beers</h1>
            {
                beers.map((beer => {
                    return (
                        <Card key={beer._id} style={{ width: '18rem' }}>
                            <Card.Img className="cardImg" variant="top" src={`${beer.image_url}`} />
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                                <Card.Text> {beer.tagline} </Card.Text>
                                <Card.Text> Created by: {beer.contributed_by} </Card.Text>
                                <Button variant="light">
                                    <Link to={`/beers/${beer._id}`} className="button" variant="primary">Find out more about this beer!</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                }))
            }
        </div>
    )
}

export default ListBeersPage