import BeersAxios from "../services/beersAxios"
import { useParams } from "react-router-dom"
import OneBeerComponent from "../components/BeerComponents/OneBeerComponent"
import { useEffect, useState } from "react"





const OneBeerPage = () => {
    const beerAxios = new BeersAxios()
    const [myBeer, setMyBeer] = useState({})
    const { id } = useParams()

    useEffect(() => {
        beerAxios.getOneBeerById(id)
            .then((beerById) => {
                setMyBeer(beerById);

            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <OneBeerComponent beer={myBeer} />
    )
}


export default OneBeerPage
