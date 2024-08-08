import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



function BeerDetailsPage() {

    const {beerId} = useParams()
    const [beer, setBeer] = useState(null);
    console.log(beerId)
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((oneBeer)=>{
            setBeer(oneBeer.data)
            console.log(beer)
        }).catch((err)=>{
            console.log(err)
        })
    },[beerId])

    

    
  return (
    <div className="oneBeer">
            {beer && (
                <div className="beer">
                    <h2>{beer.name}</h2>
                    <img src={beer.image_url} alt="" />
                    <p>{beer.description}</p>
                </div>
            )}

    </div>
  )
}

export default BeerDetailsPage
