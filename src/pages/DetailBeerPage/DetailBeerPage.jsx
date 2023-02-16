import { HeaderBeers, DetailCardBeer } from "../../components";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { getBeerById } from "../../services/beers.services";

const DetailBeerPage = () => {
    const params = useParams();
    const [beer, setBeer] = useState({});

    const getData = async () => {
        try {
            const detailBeer = await getBeerById(params.beerId);
            setBeer(detailBeer.data);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getData();
    });

    return(
        <div>
            <HeaderBeers />
            <DetailCardBeer {...beer} />
        </div>
    );
};


export default DetailBeerPage;