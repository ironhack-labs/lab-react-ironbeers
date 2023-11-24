import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


function AllBeersPage() {
    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers"
    const baseUrl2 = `https://ih-beers-api2.herokuapp.com/beers/${_id}`
    const { _id } = useParams




    const [beers, setBeers] = useState([])

    useEffect(() => {

        axios
            .get(baseUrl)
            .then((response) => {
                setBeers(response.data)
            })

    }, [])
    if (!beers) return null

    return (
        <div className=" AllBeersPage">
            <h1> All Beers List</h1>



            {
                beers.map(elm => {
                    return (
                        <> <div className="=BeerDetailsPage">
                            <Beers key={elm._id} />
                            <h3>{elm.name}</h3>
                            <h3>{elm.tagline}</h3>
                            <h3>{elm.contributed_by}</h3>
                            <img src={elm.image_url}></img>
                            <Link to={baseUrl2} />

                        </div>
                        </>


                    )

                })


            }


        </div>

    )
}






export default AllBeersPage;
