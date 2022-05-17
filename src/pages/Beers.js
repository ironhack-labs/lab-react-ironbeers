import { useState, useEffect } from "react";
import beersApi from "../utils/beersApi";
import Header from "../components/Header";
import BeerCard from "../components/BeerCard";

const Beers = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {beersApi.getAllBeers(setBeers)}, []);

    return (
        <div>
            <Header />
            {beers.map(beer => <BeerCard key={beer._id} {...beer} />)}
        </div>
    );
};

export default Beers;