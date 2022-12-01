import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap"
import BeerCard from "../../components/BeerCard/BeerCard"

const BeersPage = () => {

    const [beers, setBeers] = useState([])
    useEffect(() => {
        fetch(' https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json(res))
            .then(beersData => setBeers(beersData))
    }, [])
    return (
        <Row>
            {beers.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <BeerCard {...elm} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default BeersPage