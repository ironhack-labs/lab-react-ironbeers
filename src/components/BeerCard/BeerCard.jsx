import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const BeerCard = ({ image_url, name, _id, tagline, contributed_by }) => {


    return (
        <Link to={`/beers/${_id}`}>
            <div className="beerCard">
                <Col xs={{ span: 3, offset: 0 }}>
                    <img src={image_url} alt={name} />
                </Col>
                <Col xs={{ span: 8, offset: 1 }} className="cardBody">
                    <h3>{name}</h3>
                    <h4 className="tagline">{tagline}</h4>
                    <span><strong>Created by:</strong>{contributed_by}</span>
                </Col>
            </div>
        </Link>
    )
}
export default BeerCard