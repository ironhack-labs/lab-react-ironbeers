import BeersAxios from "../services/beersAxios"
import BeersListComponent from "../components/BeerComponents/BeersListComponent"
import { useEffect, useState } from "react"


const BeersPage = () => {
    const beerAxios = new BeersAxios()
    const [allBeers, setAllBeers] = useState([])

    useEffect(() => {
        beerAxios.getAllBeers()
            .then((myBeer) => {
                // console.log(myBeer[0])
                setAllBeers(myBeer);
            })
            .catch((err) => console.log(err))
    }, []);

    console.log(allBeers)

    return (
        <div>
            {allBeers.map((beer) => {
                return (
                    < BeersListComponent
                        oneBeerCard={beer}
                        key={beer._id} />
                )
            })}
        </div>
    )

}

export default BeersPage