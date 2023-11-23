import './AllBeersPage.css'

import axios from "axios";

import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function AllBeersPage() {

    const [beers, setBeers] = useState([])



    useEffect(() => {
        axios

            .get('https://ih-beers-api2.herokuapp.com/beers')

            .then((beer) => {
                console.log(beer.data)
                setBeers(beer.data)


            })
            .catch(err => console.log(err))
    }, [])

    return (
        beers.map(elm => {
            return (
                <Link to={`/beers/${elm._id}`}>
                    <>
                        <div className="AllBeers">
                            <img src={elm.image_url} alt="" />
                            <div className="info">
                                <h1>{elm.name}</h1>
                                <p>{elm.tagline}</p>
                                <p>{elm.contributed_by}</p>
                            </div>


                        </div>
                        <hr />
                    </>
                </Link >
            )
        })
    )


}

export default AllBeersPage;
