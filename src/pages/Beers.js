import { useState, useEffect } from "react";
import beersApi from "../utils/beersApi";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BeerCard from "../components/BeerCard";

const Beers = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {beersApi.getAllBeers(setBeers)}, []);

    return (
        <div>
            <Header />
            {(beers.length === 0) && <Loading />}
            {((beers.length !== 0) && beers[0].status) && <Error {...beers[0]} />}
            {((beers.length !== 0) && !beers[0].status) && beers.map(beer => <BeerCard key={beer._id} {...beer} />)}
        </div>
    );
};

export default Beers;