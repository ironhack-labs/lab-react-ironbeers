import { Col, Row } from "react-bootstrap"
import BeerCard from "../BeerCard/BeerCard"
import { Link } from "react-router-dom"

const BeerList = ({ beers }) => {

    return (
        <>
            {
                beers.map(elem => {
                    return (
                        <Col md={{ span: 3 }} className="mb-3">
                            <Link to={`/beer/${elem._id}`}>
                                <BeerCard {...elem} />
                            </Link>
                        </Col>
                    )
                })
            }

        </>
    )

}

export default BeerList