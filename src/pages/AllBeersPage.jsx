import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AllBeersPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/beers`)
            .then(response => {
                setBeers(response.data)
            })
            .catch((e) => {
                console.log("Error getting beers from API", e);
            });
    }, [])

    return (
        <>
            {beers.map((beesObject) => {
                return (
                    <div key={beesObject._id}
                        style={{
                            alignItems: "flex-start",
                            marginBottom: "20px",
                            display: "flex",
                        }}
                    >
                        <img
                            src={beesObject.image_url}
                            alt={beesObject.name}
                            height={300}
                            width={100}
                            style={{
                                marginRight: "20px"

                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <Link to={`/beers/${beesObject._id}`}>{beesObject.name}</Link>
                            <h3>{beesObject.tagline}</h3>
                            <h3>{beesObject.contributed_by}</h3>

                        </div>
                    </div>

                );
            })}
        </>
    )
}

export default AllBeersPage;
