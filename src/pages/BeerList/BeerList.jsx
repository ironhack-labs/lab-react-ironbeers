import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import beersService from '../../services/beers.services'
import BeerCard from './../../components/BeerCard/BeerCard'


const BeerList = () => {

    const [beersList, setBeersList] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {

        beersService
            .getAllBeers()
            .then(({ data }) => setBeersList(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>All beers</h1>
            <hr />

            <Row>
                {beersList.map(e => {
                    return (
                        <Col md={{ span: 3 }} key={e._id}> <BeerCard beer={e} allData={beersList} /></Col>
                    )
                })}
            </Row>
        </>
    )
}

export default BeerList