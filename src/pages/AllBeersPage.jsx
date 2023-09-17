import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

function AllBeersPage() {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        getBeersFromApi()
    }, [])

    const getBeersFromApi = () => {
        axios.get(`${import.meta.env.VITE_API_URL}/beers`)
        .then(response => {
            console.log(response.data)
            setBeers(response.data)
        })
        .catch((e) => {
            console.log("error getting beers from the API...", e)
        })
    }

    const renderList = () => {
        if (beers === null) {
            return ( 
                <PacmanLoader
                color="rgba(54, 97, 214, 1)"
                size={100}
                />
            )
        } 
            return (
                <section id="card">   
                    <h1>List of all our Beers</h1>
                    {beers.map((beerObj, index) => (
                        <section key={index}>
                            <img src={beerObj.image_url} alt={beerObj.name} />
                            <h2>{beerObj.name}</h2>
                            <h4>{beerObj.tagline}</h4>
                            <p>Created by: {beerObj.contributed_by}</p>
                            <Link to={"/beers/" + beerObj._id}>Beer Details</Link>
                        </section>
                    ))}
                </section>
            )
        }
        
    return (
        <>
            {renderList()}
        </>
    )
}


export default AllBeersPage;
