import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import beersApi from "../utils/beersApi";
import Header from "../components/Header";
import Loading from "../components/Loading";

const Beer = () => {
    const { beerId } = useParams();
    const [beer, setBeer] = useState({});

    useEffect(() => {beersApi.getOneBeer(beerId, setBeer)}, [beerId]);
    console.log(beer);

    return (
        <div>
            <Header />
            {(Object.keys(beer).length === 0) ? <Loading /> : <h1>{beer.name}</h1>}
        </div>
    )
};

export default Beer;