
import axios from "axios"
import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

const baseURL = 'https://ih-beers-api2.herokuapp.com/beers'


function AllBeersPage() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        getAllBeers()
    }, [])

    const getAllBeers = () => {

        axios
            .get(baseURL)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))

    }

    return (
        <>

            {
                beers.map((elm, _id) => {
                    return (
                        <div key={_id}>


                            <img style={{ width: '100px' }} src={elm.image_url} />
                            <Link to={`/beers/${elm._id}`}>
                                <p>{elm.name}</p>

                            </Link>
                            <p>{elm.tagline}</p>
                            <p> Creado por : {elm.contributed_by}</p>

                            <hr />

                        </div >
                    )
                })
            }

        </>
    )

}

export default AllBeersPage
