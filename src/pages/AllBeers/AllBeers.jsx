import { useEffect, useState, } from "react"
import Header from "../../components/Header/Header"
import beersService from '../../services/beers.services'
import BeersList from "../../components/BeersList/BeersList"

const AllBeers = ({data}) => {

    const [beersData, setBeersData] = useState([])


    useEffect(() => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                setBeersData(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (

        <>
            <Header />
            <BeersList beersData={beersData} />
        </>

    )
}

   


export default AllBeers
