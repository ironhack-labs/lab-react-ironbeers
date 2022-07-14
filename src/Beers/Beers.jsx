import { useState, useEffect } from "react"
import beersService from '../services/beers.services'
import { Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"
import './Beers.css'

const Beers = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => {
                console.log(data)
                setBeers(data)
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <Row>
                {
                    beers.map(({ _id, image_url, name, contributed_by, description }) => {
                        return (
                            <Col md={4} key={_id} className='beerCard'>
                                <img src={image_url} alt="" />
                                <Link to={`/beers/${_id}`}><p>{name}</p></Link>
                                <p>{contributed_by}</p>
                                <p>{description}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )

}

export default Beers
