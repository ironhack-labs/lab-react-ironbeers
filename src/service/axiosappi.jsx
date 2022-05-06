import React, { useEffect, useState } from 'react'
import axios from "axios";


function GetApi() {

    const [name, setName] = useState([])

    useEffect(() => {

        axio()

    }, [])


    function axio() {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(({ data }) => {

                setName(data.map(elm => elm.name))

            })
    }

    return (
        <>
            <h1>PROBANDO</h1>
            <p>{name}</p>
        </>
    )
}
export default GetApi
