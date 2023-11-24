import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import beersService from './../services/beers.services'

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    },[])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
console.log(beers)
    return (
        <>
        <h1>Todas las Cervezas</h1>
        <hr />
        {beers.map((elm, i) => {
            return (
                <div key={i}>
                    <img src={elm.image_url} alt="" />
                    <h1>{elm.name}</h1>
                    <h1>{elm.tagline}</h1> 
                    <h1>{elm.contributed_by}</h1>
                    <Link to={`/beers/${elm._id}`}className="btn btn-warning btn-sm">Ver detalles</Link>
                    <hr /> 
                </div>   
            )
        })}
        
        </>
    )
}

export default AllBeersPage;
