import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { axiosInstance } from "../api"

export default function Beershook() {
    const [beer, setBeer] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        axiosInstance.get(`/search?q=${query}`)
            .then((x) => setBeer(x.data))
    }, [query])

    return (
        <div>
            <div className="d-flex flex-nowrap align-content-center justify-content-center flex-column ">
                <div>
                    <input type="text" onChange={e => setQuery(e.target.value)} placeholder="Search" ></input>
                </div>

                {beer && beer.map((x, i) => {

                    return <Link key={i._id} to={"/beer/" + x._id}>
                        <div className="d-flex flex-nowrap flex-row " >
                            <div className="mb-2 img-fluid">
                                <img style={{ maxWidth: '100px', maxHeight: '100px' }} alt={x.name} src={x.image_url}></img>
                            </div>
                            <div>
                                <h3 className="">{x.name}</h3>
                                <h6 className="">{x.tagline}</h6>
                                <p className="">Created by: {x.contributed_by}</p>
                            </div>
                        </div>
                    </Link>
                })}
                <p> Beers</p>
            </div>
        </div>
    )
}
