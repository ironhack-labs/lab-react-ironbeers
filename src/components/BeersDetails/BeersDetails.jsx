import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import beersService from "../../services/beers.services"

function BeerDetail() {


    const [beers, setBeers] = useState()
    useEffect(() => {
        setBeers(beersService)
    }, [])

    const { _id } = useParams()

    useEffect(() => {
        beersService
            .getOneBeer(_id)
            .then(({ data }) => {
                console.log({ data })
                setBeers(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <h1>Detalles de proyecto {beers?.name}</h1>
            <img src={beers?.image_url} alt="" />
            <p>{beers?.description
            }</p>
            <hr />
        </>
    )

}

export default BeerDetail