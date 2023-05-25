import { useEffect } from "react"
import BeerCard from "../AllBeersCard/BeerCard"
import { Card, Button, Container, Row, Col } from "react-bootstrap"

const AllBeersList = ({ beers }) => {

    return (
        <div>
            <Container>
                <h1>All Beers</h1>
                <hr />
                <Row>
                    {
                        beers.map(elm => {
                            return (
                                < Col key={elm._id} className="col-3" >
                                    < div className="All-beers-list" >
                                        <BeerCard {...elm} />
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>


    )
}

export default AllBeersList

