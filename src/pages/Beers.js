import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Beers() {

    const [beers, setBeers] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/beers`)
        .then(response => setBeers(response.data))
        .catch(console.log);
    }, []);

    return(
        <>
            <Header />

            <div id="beers">
            <p>Beer count: {beers.length}</p>
            {beers.map(b => <article>

                <div className="beer" key={b.id}>
                    <Link to={"/beers/" + b._id}>
                        <img src={b.image_url} alt={b.name} />
                    </Link>
                    <div className="infos">
                        <p className="name">{b.name}</p>
                        <p className="tagline grey">{b.tagline}</p>
                        <p className="created-by"><b>Created by: </b>{b.contributed_by}</p>
                    </div>
                </div>
                <hr/>
            </article>)}
            </div>
        </>
    )
}