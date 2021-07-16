import { Col, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'


const BeerCard = ({ name, image_url, _id, tagline, contributed_by }) => {
    return (

        <> <Link to={`/beers/${_id}`} style={{ textDecoration: 'none', color: 'black' }} >

            <Row >
                <Col xs={3}  >
                    <img src={image_url} className="imgBeer" alt="beer" />
                </Col>
                <Col xs={9}>
                    <br />
                    <h4>{name}</h4>
                    <h6 style={{ color: "silver" }}>{tagline} </h6>
                    <strong >Created by:</strong> {name}


                </Col>

            </Row>
            <hr />
        </Link>
        </>

    )
}

export default BeerCard