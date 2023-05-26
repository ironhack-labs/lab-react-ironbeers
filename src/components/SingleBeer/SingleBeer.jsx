import { useEffect, useState } from "react"
import beerApiService from '../../Services/beerApi.service'
import { Link, useParams } from "react-router-dom"
import { Row, Col } from 'react-bootstrap'
import './SingleBeer.css'

const SingleBeer = () => {

    const [beerDetails, setBeerDetails] = useState()

    const { beerId } = useParams()

    const loadBeer = () => {
        beerApiService
            .getOneBeer(beerId)
            .then(response => {
                setBeerDetails(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeer()
    }, [beerId])

    return (
        <>
            {beerDetails &&
                <Row className="single-beer-box">
                    <Col xs={12} md={6}>
                        <img className='my-3 single-beer-img' src={beerDetails.image_url} alt="beer image" />
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className="single-beer-box-text-rows">
                            <Col xs={6}><h1 className="title-class">{beerDetails.name}</h1></Col>
                            <Col xs={6}><p className="attenuation-class">{beerDetails.attenuation_level}</p></Col>
                        </Row>
                        <Row className="single-beer-box-text-rows">
                            <Col xs={6}><p className="tagline-class">{beerDetails.tagline}</p></Col>
                            <Col xs={6}><p className="first-brewed-class">{beerDetails.first_brewed}</p></Col>
                        </Row>
                        <Row className="single-beer-box-text-rows">
                            <Col xs={12}>
                                <p className="description-class">{beerDetails.description}</p>
                                <p className="contributor-class">Created by: {beerDetails.contributed_by}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Link className='btn btn-dark d-grid mt-3 mb-3' to="/beers">Back to Beers List</Link>
                </Row>
            }
        </>
    )
}

export default SingleBeer
