import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AllBeersPage() {

    const [beerList, setbeerList] = useState([])

    useEffect(() => {
        const getBeers = async () => {
            let result = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setbeerList(result.data);
        }
        getBeers();
    }, []);

    return (
        <>

            {beerList.map((beer, i) => {
                return (
                    <div key={i}>
                        <img src={beer.image_url} alt="" className="beer-preview" />
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <Link to={"/beers/" + beer._id}>Details</Link>
                    </div>

                )
            })}
        </>
    )
}

export default AllBeersPage;
