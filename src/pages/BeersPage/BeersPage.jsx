import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import BeersList from '../../components/BeersList/BeersList'
import Loader from '../../components/Loader/Loader'
import BeersServices from '../../services/beers.services'
import Header from './../../components/Header/Header'
const BeersPage = () => {

    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        BeersServices
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Header />
            <Container>
                {
                    isLoading
                        ?
                        <Loader />
                        :
                        <>
                            <BeersList {...{ beers }} />
                        </>
                }
            </Container>
        </>
    )
}

export default BeersPage