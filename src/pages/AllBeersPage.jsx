import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";

const BeersAPI = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {

    const {beerId} = useParams();
    const [beers, setBeers] = useState("");
    const [loading, setLoading] = useState(true);

   useEffect(()=>{ // fazer de outra forma, talvez n seja preciso tanto
    axios.get(BeersAPI).then((response)=>{
        const beer = response.data;
        setBeers(beer);
        setLoading(false);

        console.log(beer)
    })
}, []);
// verificar se estas a usar o LINK que imprtaste
    return(
        <div className="list-beers">
            <h1>All Beers</h1>
            <ul>
            {loading && <p>Loading</p>}
            {!loading && beers.map((beer)=> {
                return(
                    <li key={beer._id}>
                        <img src= {beer.img_url} alt={beer.name}/>
                        <h2>Beer name: {beer.name}</h2>
                        <p>Tagline: {beer.tagline}</p>
                        <p>Contributed by: {beer.contributed_by}</p>
                    </li>
                )

            })}
            </ul>
        </div>
    )
}

export default AllBeersPage;
