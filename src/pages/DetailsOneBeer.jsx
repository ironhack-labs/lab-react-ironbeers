import OneBeer from "../components/OneBeer/OneBeer"
import { useParams } from 'react-router-dom'
import BeersAxios from '../services/BeersAxios';
import { useState, useEffect } from "react";
import DetailsBeer from "../components/DetailsBeer/DetailsBeer";





const DetailsOneBeer = () => {
    const { idBeer } = useParams()
    const beerAxios = new BeersAxios()
    const [beer, setBeer] = useState({});

    useEffect(() => {
        beerAxios
            .getOneBeer(idBeer)
            .then((Onebeer) => {

                setBeer(Onebeer);
            });
    }, []);


    return (
        <>
            <p> estas en details</p>
            <DetailsBeer beer={beer} />
        </>

    )
}

export default DetailsOneBeer