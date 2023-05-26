import { useEffect, useState } from "react"
import beerApiService from '../../Services/beerApi.service'
import { Col, Row } from "react-bootstrap"
import BeerCard from "../../components/BeerCard/BeerCard"
import './Beers.css'

const Beers = () => {

    const [beers, setBeers] = useState([])

    const loadBeers = () => {
        beerApiService
            .getBeers()
            .then(({ data }) => {
                console.log(data)
                const ascSortedBeers = [...data]
                ascSortedBeers.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                setBeers(ascSortedBeers)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeers()
    }, [])

    if (!beers) {
        return <p>loading...</p>
    } else {


        return (
            <section className="Beers">
                <h1>IronBeers</h1>
                <hr />
                <Row>
                    {beers.map(elm => {
                        return (
                            <Col sm={12} md={6} lg={4} key={elm._id} >
                                <BeerCard {...elm} />
                            </Col>
                        )
                    })}
                </Row>
            </section>
        )
    }
}

export default Beers

