import BeerCard from "../BeersCard/BeerCard"
import { Row, Col } from "react-bootstrap"


const ListBeers = ({ beers }) => {
    return (
        <Row>
            {
                beers.map(elm => {
                    return (
                        <Col md={{ span: 2 }} key={elm._id}>

                            <BeerCard {...elm} />
                        </Col>
                    )

                })
            }
        </Row>
    )
}

export default ListBeers