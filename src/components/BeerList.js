import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function BeerList(){

    const [listBeer, setListBeer] = useState(undefined)
    
    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers"

    useEffect(() =>{
        axios.get(baseUrl)
        .then((element) => {
            console.log(element.data);
            setListBeer(element.data)
        })
        .catch((e) => { console.log(e);})
    }, [])

    if(listBeer === undefined){
        return <h1>Loading...</h1>
    } else {
    return(
        listBeer.map((e) => {
            return(
        <>  
            <Link to={`/beers/${e._id}`} key={e._id}>
                    <img src={e.image_url} alt={e.name} />
                <div>
                    <h1>{e.name}</h1>
                    <h3>{e.tagline}</h3>
                    <p>{e.contributed_by}</p>
                </div>
            </Link>
        </>
        )})
    )
    }
}
export default BeerList