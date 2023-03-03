import { useEffect, useState } from "react"
import beersService from "../../services/beers.services"
import Table from "react-bootstrap"
import BeersCardsInfo from "../../BeersCardsInfo/BeersCardsInfo"

import { Container } from "react-bootstrap"


const Beers = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        beersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {beers.map(elm => {

                return (
                    <>
                        <p colSpan={6}>{elm.id}</p>
                        <BeersCardsInfo {...elm} />
                    </>
                )
            })}

        </>

    )
}

export default Beers