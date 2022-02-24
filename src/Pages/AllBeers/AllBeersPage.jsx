import { useState, useEffect } from 'react'
import beersService from '../../Services/beer.services'

import BeerCard from '../../Components/BeerCard/BeerCard'
import Header from "../../Components/Header/Header"
import FilterBar from '../../Components/FilterBar/FilterBar'


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


    function filter(str) {

        let filteredBeers

        // ambas  maneras funcionan, no en tiendo la necesidad de hacer otra llamada a 
        //axios(salvo que el resultado de find() no te traiga todos los resultados)


        //str ? filteredBeers = beersCopy.filter(elm => elm.name.includes(str)) : filteredBeers = beersCopy

        if (str) {
            beersService
                .getByQuery(str)
                .then(({ data }) => {
                    filteredBeers = data
                    setBeers(filteredBeers)
                })
        }
        else {
            filteredBeers = beersCopy
            setBeers(filteredBeers)
        }



    }


    return (
        <>
            <Header />
            <FilterBar filter={filter} />
            {
                beers.map(elm => {

                    return <BeerCard key={elm._id} {...elm} />

                })
            }


        </>
    )
}

export default AllBeersPage