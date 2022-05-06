import { useState, useEffect } from "react";
import BeerList from "../components/BeerList/BeerList";
import ironbeersService from "../services/Ironbeersservice"


function BeersListPage() {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        ironbeersService
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data);
            })
    }, [])

    // const handleInput = e => {

    //     let searching = e.target.value;

    //     let filteredBeers = beers.filter((beer) => {
    //         return beer.name.includes(searching);
    //     });

    //     setBeers(filteredBeers);

    // }

    return (
        < >
            {/* <input type={"search"} placeholder={"Search Beer"} onChange={handleInput}></input> */}

            <h2>Beers List</h2>

            <BeerList beers={beers} />

        </>
    );
}

export default BeersListPage; 