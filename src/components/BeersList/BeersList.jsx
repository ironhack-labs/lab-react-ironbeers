import { Link } from "react-router-dom"
import BeerCard from "../BeerCard/BeerCard"
import { Col, Row } from "react-bootstrap"

const BeersList = ({ beerList }) => {

    return (

        beerList.map(beer => {
            return <Col md={4} key={beer._id}> <Link to={`/beers/${beer._id}`}> <BeerCard beer={beer} /> </Link> </Col>
        })
    )
}

export default BeersList