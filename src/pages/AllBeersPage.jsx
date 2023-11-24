import { useEffect } from "react";
import { useState } from "react";
import beerService from "../../services/beer.services";
import { Link } from "react-router-dom";

const AllBeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        beerService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {beers.map((eachBeer, i) => {
                return (
                    <div key={i}>
                        <Link to={`/beers/${eachBeer._id}`}>
                            <img src={eachBeer.image_url} alt={eachBeer.name} />
                            <p>{eachBeer.name}</p>
                            <p>{eachBeer.tagline}</p>
                            <p>{eachBeer.contributed_by}</p></Link>
                    </div >
                )
            })}
        </>
    )
}

export default AllBeersPage;
