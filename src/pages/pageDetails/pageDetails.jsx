import { useEffect, useState } from "react"
import beerService from "../services/beer.service"
import { Row, Col } from 'react-bootstrap'


function BeerDetails() {


    const [beers, setBeers] = useState()

    const loadBeer = () => {
        beerService
            .getBeer()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }


    useEffect(() => {
        loadBeer()
    }, [])



    return (
        <Row>
            {beers.map(elm => {
                return (
                    <Col sm={{ span: 4 }} key={elm._id} >
                        <h3>{elm.name}</h3>
                    </Col>
                )
            })}
        </Row>

    )

}

export default BeerDetails