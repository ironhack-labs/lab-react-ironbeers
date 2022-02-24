import { useState, useEffect } from "react"
import { Row, Col, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import axios from "axios"
import WithNavbar from "../WithNavbar/WithNavbar"


const SingleBeer = () => {

    const {beerId} = useParams()

    const [beer, setBeer] = useState({})


    useEffect(() => {
            axios
                .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
                .then(data => {
                    setBeer(data)
                })

    }, [])

    console.log(beer)

    

    return (

        <WithNavbar>
            <Row>
                <Col>
                    <img src={beer.data?.image_url} style={{width: "100px"}}/>
                    <h1>{beer.data?.name}</h1>
                    <p>{beer.data?.tagline}</p>
                    <p>{beer.data?.first_brewed}</p>
                    <p>{beer.data?.attenuation_level}</p>
                    <p>{beer.data?.description}</p>
                    <p>{beer.data?.contributed_by}</p>
                </Col>
            </Row>
        </WithNavbar>
        
    )
}

export default SingleBeer