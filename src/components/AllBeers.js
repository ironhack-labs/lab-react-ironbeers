import { useState, useEffect } from "react";     // <== IMPORT useEffect
import Navbar from "./Navbar";
import axios from "axios";
import {Link, useParams, useSearchParams } from "react-router-dom";

function AllBeer(){
    const [beers, setBeers] = useState([]);
    const [isLoading,setLoading] = useState(false);
    const [beerId,setBeerId] = useState(null);
    const [hasId, setHasId] = useState(false);

    const urlAPI = 'https://ih-beers-api2.herokuapp.com/beers';

    useEffect(() =>{
        axios.get(urlAPI)
            .then((response) => {
                setBeers(response.data);
                setLoading(true);
                console.log('getting beers')
            })
    },[]);
  console.log(beers);
        return(
            <div >
                <Navbar />
                <section className="oneBeerContainer">
                    {isLoading && !hasId && 
                        beers.map((oneBeer) => {
                            return(
                            <div className="oneBeer">
                                <Link to={`/beers/${oneBeer._id}`} >
                                    <div className="oneBeerImg">
                                        <img src={oneBeer.image_url} />
                                    </div>
                                </Link>
                                <div className="oneBeerText">
                                    <h2>{oneBeer.name}</h2>
                                    <p>{oneBeer.tagline}</p>
                                    <p><b>Created by: </b>{oneBeer.contributed_by}</p>
                                </div>
                            </div>
                            );
                        })
                    }
                </section>
            </div>
        )
    }

export default AllBeer;