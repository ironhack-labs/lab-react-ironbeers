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
        <div className="flex h-30">
            
            <Link className="flex-shrink-0" to={`/beers/${e._id}`} key={e._id}>
                    <img src={e.image_url} alt={e.name} className="w-12 h-36 m-6" />
            </Link>
                <div className="  text-start  w-auto m-8">
                    <h1 className="text-2xl">{e.name}</h1>
                    <h3 className="text-gray-400">{e.tagline}</h3>
                    <p className="font-bold">Ceated By : <span className="font-normal">{e.contributed_by}</span></p>
                </div>
        </div>
        <hr className="bg-black w-[100vw]"/>
        </>
        )})
    )
    }
}
export default BeerList