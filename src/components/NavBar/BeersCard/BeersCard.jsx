import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../BeersCard/BeersCard.css'


const BeerCard = ({ image_url, name, tagline, _id }) => {
    return (

        <Link to={`/details/${_id}`}>
            <div className="BeerContainer" key={_id}>
                <Row>
                    <Col className="BeerCard">
                        <img src={image_url} alt="" />
                    </Col>
                    <Col>
                        <h2>{name}</h2>
                        <p>{tagline}</p>
                    </Col>
                </Row>
            </div>
        </Link>

    )
}

export default BeerCard