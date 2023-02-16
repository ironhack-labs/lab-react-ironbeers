import { useState, useEffect } from "react";
import { DetailCardBeer, HeaderBeers } from "../../components";
import { getAllBeers } from "../../services/beers.services";

const RandomBeerPage = () => {
    const [randomBeer, setRandomBeer] = useState({});

    const getDataRandom = async () => {
        try {
            const beerList = await getAllBeers();
            let indexRandom = Math.floor(Math.random() * beerList.data.length)
            if(indexRandom > 1 || indexRandom === 0){
                const beerSelected = beerList.data[indexRandom];
                return setRandomBeer(beerSelected); 
            }
            setRandomBeer({});
        } catch (error) {
            console.log('Error en random beer', error)
        }
    }

    useEffect(() => {
        getDataRandom()
    }, [])
    return(
        <div>
            <HeaderBeers />
            <DetailCardBeer {...randomBeer} />
        </div>
    );
};

export default RandomBeerPage;