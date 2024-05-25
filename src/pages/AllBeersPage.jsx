import {useEffect, useState} from "react";
import * as beerAPIs from '../api/beers.js'
import BeerCard from "../components/BeerCard.jsx";




function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        beerAPIs
            .getAll()
            .then(response => {
                const {data} = response;
                setBeers(data);
            })
            .catch(error => console.error(error))
    }, [])


   
    return (<div>
        {
            beers.map(beer => {
                return <BeerCard
                    key={beer._id}
                    name={beer.name}
                    image_url={beer.image_url}
                    tagline = {beer.tagline}
                    contributed_by= {beer.contributed_by}
                    _id = {beer._id}
                    

                    
                />
            })
        }
    </div>)
}



export default AllBeersPage;
