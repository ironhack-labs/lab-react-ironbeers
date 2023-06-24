import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


function BeerDetails(){

    const {id} = useParams();
    const [beerDetail, setBeerDetail] = useState(undefined)
    console.log(id);
    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers/"

useEffect(() => {
    axios.get(baseUrl+id)
        .then((e) => {
            console.log(e);
            setBeerDetail(e.data)
        })
        .catch((e) => console.log(e))
}, [id])

    if(beerDetail === undefined){
        return <h1>Loading...</h1>
    } else {
    return(
        <>
            <div key={beerDetail._id}>
            <img src={beerDetail.image_url} alt={beerDetail._id}/>
            <h1>{beerDetail.name} {beerDetail.attenuation_level}</h1>
            <h3>{beerDetail.tagline}{beerDetail.first_brewed} </h3>
            <p>{beerDetail.description}</p>
            <em>{beerDetail.contributed_by}</em>
            </div>
            <Link to="/beers">Back</Link>
        </>
        )
    }
}
export default BeerDetails