import { Col, Row, Button } from "react-bootstrap"
import BeerCard from '../BeerCard/BeerCard';
import { Link } from "react-router-dom";
const BeerList = ({ data }) => {

    return (
        <Row>
            {data?.map(elm => {
                return (<Col md={4} className='mb-4' key={elm._id}>

                    < BeerCard {...elm} />
                </Col>)
            })}

        </Row>
    )


}

export default BeerList