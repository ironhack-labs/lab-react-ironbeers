import axios from "axios";
import { useEffect, useState } from "react";

function BeersList() {

    const [beers, setBeerList] = useState([])
    // console.log(typeof(process.env.REACT_APP_API_URL));
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}`)
            .then((response) => {
                // console.log(response);
                return(setBeerList(response.data))
            })
            .catch(e => console.log(e))
    }, [])

    // console.log(beers);

    return(
        <div>
            <h1>Beers List</h1>
            {beers.map((beerObj) => {
                console.log(beerObj);
                return(
                    <div key={beerObj._id}>
                        <img src={beerObj.image_url}/>
                        <h1>{beerObj.name}</h1>
                        <h3>{beerObj.tagline}</h3>
                        <p>Created by: {beerObj.contributed_by}</p>
                        <button>Details</button>
                        <hr></hr>
                    </div>
                )
            })}
            
        </div>
    )
}

export default BeersList;