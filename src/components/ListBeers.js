import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";


export default function ListBeers(props) {

    const [beers, listOfBeers] = useState([]);

    useEffect(() => {

        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                listOfBeers(response.data)
            });


    }, [])
    console.log(beers)


    return (
        <div>
            <h3>List Of Beers</h3>


            {beers.map((beers, index) => (
                <div key={index} className="card">
                    <img src={beers.image_url} alt="beer" />
                    <h3>{beers.name}</h3>
                    <h4>{beers.tagline}</h4>
                    <h4>{beers.contributed_by}</h4>
                    <NavLink to={`/beers/${beers._id}`} >More Info</NavLink>

                </div>



            ))}


        </div>

    )
}