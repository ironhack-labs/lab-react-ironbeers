import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerCard from "../components/BeerCard";
import BeersAPI from '../services/beer.service';

const BeerDetail = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState(undefined);

    useEffect(() => {
        BeersAPI.getOneBeerById(id).then((beer) => {
            setBeer(beer);
        });
    }, [id]);

    return (
        <>
            {
                beer ? (<BeerCard beer={beer} />) : (<p>Loading</p>)
            }
        </>


    );
}

export default BeerDetail;