import axios from "axios";

import { useState, useEffect } from "react";

import {Link} from "react-router-dom";




function AllBeersPage() {




    const [beers, setBeers] = useState([]);

    const [searchBeer, setSearchBear] = useState("")




    useEffect(()=>{

        axios

        .get("https://ih-beers-api2.herokuapp.com/beers")

        .then((response)=>{

            setBeers(response.data);




        })

    }, []);







    const filteredBeers = beers.filter((beer) => beer.name.toLowerCase().includes(searchBeer.toLowerCase()));




    return(        

        <div className="container justify-content-center">

            <div className="row d-flex justify-content-center">

                <h3>All Beers Page</h3>

            </div>

            <div>

                <form>

                    <label>

                        Search for your beer

                        <input name="searchBeer" type="text" onChange={(e)=>setSearchBear(e.target.value)} value={searchBeer}></input>

                    </label>

                </form>

            </div>

            <div>

                {filteredBeers.map((beer)=>{

                    return(                    

                        <div key={beer._id} className="d-flex align-items-start mb-5">

                            <div>

                                <img style={{ height: "200px" }} src={beer.image_url}/>                        

                            </div>

                            <div>

                                <Link to={`/beers/${beer._id}`}>

                                <h4>{beer.name}</h4>

                                </Link>

                                <p>{beer.tagline}</p>

                                <p>Created by: {beer.contributed_by}</p>

                            </div>

                            <hr style={{ width: "100%" }} />

                        </div>                            

                    )

                })}

            </div>

        </div>

    )

}




export default AllBeersPage;

