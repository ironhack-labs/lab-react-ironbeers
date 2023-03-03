import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import BeersServices from "../../services/beers.services"
import Header from "../../components/Header/Header"
import BeerDetails from "../../components/BeerDetails/BeerDetails"



const BeerDetailsPage = () => {

    const [beerDetails, setbeerDetails] = useState([])

    const { beerid } = useParams()

    useEffect(() => {
        BeersServices
            .getOneBeer(beerid)
            .then(({ data }) => setbeerDetails(data))
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <Header />
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <BeerDetails {...beerDetails} />
                </Col>
            </Row>
        </>
    )

}

export default BeerDetailsPage