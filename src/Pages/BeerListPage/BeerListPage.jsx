import './BeerListPage.css'
import { Row, Col, Container } from 'react-bootstrap';
import beersService from '../../services/beers.service'
import { useState, useEffect } from 'react';
import BeerList from '../../components/BeerList/BeerList';

const BeerListPage = () => {

    const [beers, setBeers] = useState([])

    const handleBeers = () => {
        beersService
            .getBeers()
            .then(data => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        handleBeers()
    }, [])

    const { data } = beers


    return (
        <Container>
            <Row className='d-flex justify-content-center flex-wrap'>
                {<BeerList data={data} />}
            </Row >
        </Container>


    )
}

export default BeerListPage;