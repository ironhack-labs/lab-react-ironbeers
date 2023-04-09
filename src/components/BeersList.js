import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function BeersList() {

    const [beersArr, setBeersArr] = useState(null);

    const [query, setQuery] = useState("");

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
                        <div key={beer._id}>
                            <img src={beer.image_url} alt={beer.name} />
                            <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                            <h4>{beer.tagline}</h4>
                            <p>Created by: {beer.contributed_by}</p>
                        </div>
                    );
                }) }
            </>
        );
    };

    const filterBeers = (e) => {
        setQuery(e.target.value);

        axios.get(process.env.REACT_APP_APIURL + `/search?q=${query}`)
            .then((response) => {
                setBeersArr(response.data);                
            }).catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
            <NavBar />

            <label style={{display: "block"}}>
                Search:
                <input type="text" value={query} onChange={filterBeers}/>
            </label>

            {beersArr ? renderBeers() : <h1>Loading...</h1>}
        </>
    );
}

export default BeersList;