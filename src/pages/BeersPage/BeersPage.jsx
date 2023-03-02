import { useEffect, useState } from 'react'
import BeersList from '../../components/BeersList/BeersList'
import SearchBar from '../../components/SearchBar/SearchBar'
import beersService from './../../services/beers.services'

const BeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.log(err))
    }

    const filterBeers = filter => {
        if (filter === "") {
            beersService
                .getAllBeers()
                .then(({ data }) => setBeers(data))
                .catch(err => console.log(err))

        } else {
            beersService
                .filterBeers(filter)
                .then(({ data }) => {
                    setBeers(data)
                })
                .catch(err => console.log(err))
        }
    }


    return (
        <>
            <SearchBar filterBeers={filterBeers} />
            <BeersList beers={beers} />
        </>
    )
}
export default BeersPage