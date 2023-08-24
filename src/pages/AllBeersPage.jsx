import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function AllBeersPage() {

    const [beers, setBeers] = useState([])
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data)
                // console.log(response.data);
            })
    }, [])
    // console.log(beers);

    return (
        <div>
            {beers.map((elm) => {
                return (
                    <article key={elm._id}>
                        <div className="container">
                            <Link to={`${elm._id}`}>
                                <img style={{ height: '120px' }} src={elm.image_url} alt="beers" />
                            </Link>

                            <h2>{elm.name}</h2>
                            <h3>{elm.tagline}</h3>
                            <p>{elm.contributed_by}</p>

                        </div>


                    </article>
                )
            })}

        </div>

    )
}

export default AllBeersPage;
