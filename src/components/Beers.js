import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";

function Beers() {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL)
            .then((res) => {
                setBeers(res.data);
            })
            .catch((err) => {
                console.log("error getting beers from API", err);
            })
    }, [])

    return (
        <div>
            <Header />
            {beers === []
                ? <h1>Loading...</h1>
                : beers.map((beer, index) => {
                    return (
                        <div className="beerCard" key={index}>
                            <img src={beer.image_url} alt="" />
                            <div className="beerText">
                                <h1>{beer.name}</h1>
                                <h2>{beer.tagline}</h2>
                                <p><strong>Created by: </strong>{beer.contributed_by}</p>
                            </div>



                        </div>

                    )
                })
            }
        </div>
    )
}

export default Beers;