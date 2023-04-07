import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BeersList() {

    const [beersArr, setBeersArr] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_APIURL)
            .then((response) => {
                setBeersArr(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const renderBeers = () => {
        return (
            <>
                { beersArr.map(beer => {
                    return (
                        <>
                            <img src={beer.image_url} alt={beer.name} />
                            <h3>{beer.name}</h3>
                            <h4>{beer.tagline}</h4>
                            <p>Created by: {beer.contributed_by}</p>
                        </>
                    );
                }) }
            </>
        );
    };

    return (
        <>
            {beersArr ? renderBeers() : <h1>Loading...</h1>}
        </>
    );
}

export default BeersList;