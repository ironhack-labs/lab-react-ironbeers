import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/beers`)
        .then(response => {
            console.log(response.data);
            setBeers(response.data)
        })
        .catch(e => console.log("error", e))
    }, [])

    const navigate = useNavigate()

    const handleClick = (beer) => {
        navigate(`/beers/${beer._id}`)
        console.log(beer._id);
    }


    const beersList = () => {
        if(beersList === null) {
            return <p>Loading...</p>
        }

        return beers.map((e) => {
                return (
                    <section key={e._id} className="card">
                        <img onClick={() => handleClick(e)} src={e.image_url}/>
                        <h3><a href={"/beers/" + e._id }>{e.name}</a></h3>
                        <h4>{e.tagline}</h4>
                        <h5>Created by: {e.contributed_by}</h5>

                    </section>
                )
            }
        )
    }

    return (
        <>
        {beersList()}
        </>
    )

}

export default AllBeersPage;
