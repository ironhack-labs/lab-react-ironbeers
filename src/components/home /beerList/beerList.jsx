import './beerList.css'
import { useEffect, useState } from "react";



const BeersList = () => {


    const [beers, setBeers] = useState([])


    useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(res => res.json())
            .then(beersArray => setBeers(beersArray))
    }, [])


    return (
        <div>
            {beers.map((beers) => {
                console.log(beers)
                return (
                    <div className="countrie">
                        <img src={beers.image_url} />
                        <h2>{beers.name}</h2>
                        <h3>{beers.tagline}</h3>
                        <p>{beers.contributed_by}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    )



}


export default BeersList

