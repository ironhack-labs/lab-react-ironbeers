import { useState, useEffect } from 'react'
import beersService from '../../service/beerServices'

import BeerCard from '../../Components/BeerCard/BeerCard'
import Header from '../../Components/Header/Header'

const AllBeersPage = () => {



    const [beers, setBeers] = useState([])
    const [beersCopy, setCopy] = useState([])


    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data)
                setCopy(data)

            })
            .catch(err => console.log(err))
    }


     return (
        <>
            <Header />
            {/* <FilterBar filter={filter} /> */}
            {
                beers.map(elm => {

                    return <BeerCard key={elm._id} {...elm} />

                })
            }


        </>
    )
}

export default AllBeersPage 