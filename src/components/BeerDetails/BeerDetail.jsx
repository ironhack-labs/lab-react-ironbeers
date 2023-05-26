import { useParams } from "react-router-dom"
import BeerCard from "../BeerCard/BeerCard"
import beerService from "../../services/beerServers"
import { useEffect, useState } from "react"

const BeerDetail = () => {

    const [oneBeer, setOneBeer] = useState()
    const { idBeer } = useParams()



    useEffect(() => {
        OneBeer()
    }, [])


    const OneBeer = () => {
        beerService
            .getOneBeer(idBeer)
            .then(({ data }) => {
                console.log("beeeer", data)
                setOneBeer(data)
            })
    }
    return (


        !oneBeer
            ?
            "Cargnado"
            :
            <BeerCard Updatebeers={[oneBeer]} descp={true} />


    )
}

export default BeerDetail