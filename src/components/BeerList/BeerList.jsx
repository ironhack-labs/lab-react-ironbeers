import { useEffect, useState } from "react"
import beerService from "../../services/beers.service"
import BeerCard from "../BeerCard/BeerCard"




const BeerList = () => {

    const [beers, setBeers] = useState([])

    const loadBeers = () => {
        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeers()
    }, [])


    return (
        <div className="container">
            <div className="row">
                {beers.map(elm => {
                    return (
                        <div className="col-4" key={elm._id}>
                            <BeerCard {...elm} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default BeerList