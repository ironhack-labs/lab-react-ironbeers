import { Card } from 'react-bootstrap';
import { Row } from "react-bootstrap"
import BeerCard from '../BeerCard/BeerCard';
const BeerList = ({ data }) => {
    return (
        <Row>
            <h1>Sigo ocurriendo</h1>
            {data?.map(elm => {
                < BeerCard {...elm} />
            })}
        </Row>
    )
}

export default BeerList