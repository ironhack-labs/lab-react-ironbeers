import { useEffect, useState } from "react"
import BeersCard from "../../components/BeersCard/BeersCard"
import beersServices from './../../services/beersServices'


const AllBeers = () => {

    return (
        <>
            <BeersCard />
        </>
    )



    // useEffect(() => {
    //     loadBeers()
    // }, [])

    // const loadBeers = () => {
    //     beersServices
    //         .getAllBeers()
    //         .then(({ data }) => {
    //             setAllBeers(data)
    //         })
    //         .catch(err => console.log(err))

    // }




}

export default AllBeers