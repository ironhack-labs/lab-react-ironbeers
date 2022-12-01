import { useEffect, useState } from "react"
import BeersService from "../../services/beers-service"



function BeersList() {

    const [beers, setBeers] = useState([])

    const loadBeers = () => {

        BeersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeers()
    }, [])

    return (
        <div>

            {beers.map(elm => {
                return (
                    <>
                        <img src={elm.image_url} alt="" />
                        <p >{elm.name}</p>
                    </>

                )
            })}

        </div>

    )
}

export default BeersList