import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import beersApi from "../utils/beersApi";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Error from "../components/Error";
import BeerDetails from "../components/BeerDetails";

const Beer = () => {
    const { beerId } = useParams();
    const [beer, setBeer] = useState({});
    useEffect(() => {beersApi.getOneBeer(beerId, setBeer)}, [beerId]);
    
    return (
        <div>
            <Header />
            {(Object.keys(beer).length === 0) && <Loading />}
            {((Object.keys(beer).length !== 0) && beer.status) && <Error {...beer} />}
            {((Object.keys(beer).length !== 0) && !beer.status) && <BeerDetails {...beer} />}
        </div>
    )
};

export default Beer;