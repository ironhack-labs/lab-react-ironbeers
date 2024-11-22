import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {

    const [allBeers, setAllBeers] = useState(null);

    useEffect(()=> {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log(response.data);
            
            setAllBeers(response.data);
        })
        .catch((error)=> console.log("Something went wrong with the API...", error))
    }, [])

if (allBeers === null) {
    return "Loading..."
}

return (
<div className="AllBeers card-list">
{allBeers && allBeers.map(allBeersDetails => {
    return (
        <div className="card" key={allBeersDetails.id}>
            <Link to={`/beers/${allBeersDetails.id}`}>
                <img src={allBeersDetails.image_url}/>
                <h3>{allBeersDetails.name}</h3>
                <p>{allBeersDetails.tagline}</p>
                <p>{allBeersDetails.contributed_by}</p>
            </Link>
        </div>
    );
})}
</div>
)
}

export default AllBeersPage;
