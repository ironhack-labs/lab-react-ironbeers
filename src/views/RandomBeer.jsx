
import { Navbar } from "../components/misc/NavBar";
import React, { useEffect, useState } from "react";
import { BeerDetailItem } from "../components/Beers/BeerDetailItem";
import { getBeerRandom } from "../services/BeersService";

export const RandomBeer = () => {
    const [randomBeer, setrandomBeer] = useState(null);

    useEffect(() => {
        getBeerRandom()
            .then((randomBeer) => {
                setrandomBeer(randomBeer);
            })
            .catch((err) => console.error(err));
    }, []);
    return (

        <div>
            <Navbar />
            <BeerDetailItem {...randomBeer} />
        </div>
    );
};