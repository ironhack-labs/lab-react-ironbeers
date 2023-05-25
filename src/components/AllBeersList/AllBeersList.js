import { Col } from "react-bootstrap"
import BeerCard from "../BeerCard/BeerCard"

export default function AllBeersList({beers}){
    return(
        beers.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <BeerCard {...elm} />
                    <hr />
                </Col>
                
            )
        })
    )
}