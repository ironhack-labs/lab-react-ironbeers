import './BeerListPage.css'
import { Container } from 'react-bootstrap';
import beersService from '../../services/beers.service'
import { useState, useEffect } from 'react';
import BeerList from '../../components/BeerList/BeerList';

const BeerListPage = () => {

    const [beers, setBeers] = useState([])

    const handleBeers = () => {
        beersService
            .getBeers()
            .then((data) => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        handleBeers()
    }, [])

    const { data } = beers

    return (
        <Container>
            <h1>IronBeers List</h1>

            <hr className='mb-4 mt-3' />

            {beers.length === 0 ? <h1>Loading...</h1> : <BeerList data={data} />}

        </Container >


    )
}

export default BeerListPage;