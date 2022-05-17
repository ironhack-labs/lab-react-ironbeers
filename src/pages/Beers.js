import { useState, useEffect } from "react";
import beersApi from "../utils/beersApi";
import Header from "../components/Header";

const Beers = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {beersApi.getAllBeers(setBeers)}, []);

    return (
        <div>
            <Header />
            {beers.map(beer => <p key={beer._id}>{beer.name}</p>)}
        </div>
    );
};

export default Beers;