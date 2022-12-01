import { useEffect, useState } from "react"
import beersService from "../../services/beers.service"
import { Col, Row } from "react-bootstrap"
import BeerCard from "../../components/BeerCard/BeerCard"
import './Beers.css'

const Beers = () => {

    const [beers, setBeers] = useState([])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => {
                const sortedByName = [...data]
                sortedByName.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                setBeers(sortedByName)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeers()
    }, [])

    return (
        <section className="Beers">
            <h1>Our Beers</h1>
            <hr />
            <Row>
                {beers?.map(elem => {
                    return (
                        <Col sm={{ span: 4 }} key={elem._id} >
                            <BeerCard {...elem} />
                        </Col>
                    )
                })}
            </Row>
        </section>
    )


}

export default Beers