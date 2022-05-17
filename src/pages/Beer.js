import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import beersApi from "../utils/beersApi";
import Header from "../components/Header";
import Loading from "../components/Loading";
import BeerDetails from "../components/BeerDetails";

const Beer = () => {
    const { beerId } = useParams();
    const [beer, setBeer] = useState({});
    useEffect(() => {beersApi.getOneBeer(beerId, setBeer)}, [beerId]);

    return (
        <div>
            <Header />
            {(Object.keys(beer).length === 0) ? <Loading /> : <BeerDetails {...beer} />}
        </div>
    )
};

export default Beer;