import { useState, useEffect } from "react";
import BeerList from "../components/BeerList/BeerList";
import beerService from "../services/beers.services";


function BeersPage() {
    const [beers, setBeers] = useState([]);


    useEffect(() => {
        beerService
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data);
            })
    }, [])

    const handleInput = e => {

        let search = e.target.value;

        let result = beers.filter((elm) => {
            return elm.name.includes(search);
        });

        setBeers(result);
 
    }

    return (
        <div >

            <div>
                <input type={"search"} placeholder={"Buscar Cerveza"} onChange={handleInput}></input>
            </div>

            <h2>Beers</h2>

            <BeerList beers={beers}/>

        </div>
    );
}

export default BeersPage;