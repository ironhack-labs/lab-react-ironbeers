import { Col, Row } from "react-bootstrap"
import BeerCard from "../BeerCard/BeerCard"
import apiService from "../../services/api.services"
import { useState, useEffect } from "react"


const BeersList = () => {
    
const [beers, setBeers] = useState([])

    const loadBeers = () => {

        apiService
            .getBeers()
    /*         .select(name, image_url, descripition) */
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeers()
    }, [])

 
    return (
        <>
      <Row>
            {beers.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <BeerCard {...elm} />
                    </Col>
                )
            })}
        </Row> 
            </>
    )
}

export default BeersList