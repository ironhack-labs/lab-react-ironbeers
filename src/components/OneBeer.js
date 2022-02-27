import { useState, useEffect } from "react";     // <== IMPORT useEffect
import Navbar from "./Navbar";
import axios from "axios";
import {Link, useParams, useSearchParams } from "react-router-dom";

function OneBeer(){
const [beer, setBeer] = useState([]);
const [isLoading,setLoading] = useState(false);
const {id} = useParams() ;
const urlAPI = 'https://ih-beers-api2.herokuapp.com/beers/' + id;

useEffect(() =>{
    axios.get(urlAPI)
        .then((response) => {
            setBeer(response.data);
            setLoading(true);
        })
},[]);

console.log(beer);
return(
    <div >
        <Navbar />
        <section className="oneBeerContainer">
            {isLoading && 
                <div className="oneBeer">
                    <Link to={`/beers/${beer._id}`} >
                        <div className="oneBeerImg">
                            <img src={beer.image_url} />
                        </div>
                    </Link>
                    <div className="oneBeerText">
                        <h2>{beer.name}</h2>
                        <p>{beer.attenuation_level}</p>
                        <p>{beer.tagline}</p>
                        <p>{beer.first_brewed}</p>
                        <p>{beer.description}</p>
                        <p><b>Created by: </b>{beer.contributed_by}</p>
                    </div>
                </div>
            }
        </section>
    </div>
)

}

export default OneBeer;