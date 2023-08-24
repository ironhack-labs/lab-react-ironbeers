import axios, { Axios } from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                setBeer(response.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            })

    }, [])

    return (
        <>
            <div>
                {beers.map((elm) => {
                    return (
                        <div>
                            <div className="container d-flex justify-content-around">
                                <Link to={`/beers/${elm._id}`}>
                                    <img className="mt-3" style={{ maxHeight: '40vh' }} src={elm.image_url} alt="" />
                                </Link>
                                <div className=" d-flex flex-column align-items-center justify-content-around">
                                    <h1>{elm.name}</h1>
                                    <p>{elm.tagline}</p>
                                    <strong>{elm.contributed_by}</strong>
                                </div>

                            </div>
                            <hr />
                        </div>
                    )

                })}
            </div>
        </>

    )

}
export default AllBeersPage;
