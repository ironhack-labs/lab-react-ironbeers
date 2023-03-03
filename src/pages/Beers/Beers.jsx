import { useEffect, useState } from "react"
import beersService from "../../services/beers.services"
import BeerCard from "../../components/Header/BeerCard/BeerCard"
import { Col, Row } from "react-bootstrap"


const Beers = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }

    return (

        < Row >
            {
                beers.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <BeerCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row >

    )
}

export default Beers