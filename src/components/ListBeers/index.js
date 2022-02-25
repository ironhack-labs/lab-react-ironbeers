import { useState } from "react";
const URL = `https://ih-beers-api2.herokuapp.com/beers`;

const ListBeers = () => {
    const [ beers, setBeers ] = useState([]);
    return(
        <div>
            <h1>List Beers </h1>
        </div>
    )
};

export default ListBeers;