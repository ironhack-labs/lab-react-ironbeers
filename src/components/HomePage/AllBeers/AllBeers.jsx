import beerService from "../../../services/beer.service"
import { Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"

const AllBeers = () => {
    const [beers, setBeers] = useState([])
    const loadBeers = () => {
        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        loadBeers()
    }, [])


    return (

        <Row>
            <h1>BEERS</h1>
            {beers.map(elm => {
                return (
                    <div>
                        <h1>{elm.name}</h1>
                        <img src={elm.image_url} alt="" />

                        <p>{elm.tagline}</p>
                    </div>
                )
            })}
        </Row>


    )
}
export default AllBeers