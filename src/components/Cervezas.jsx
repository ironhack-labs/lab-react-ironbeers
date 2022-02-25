import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';

function Cervezas() {

    const [listBeer, setListBeer] = useState([])

    useEffect(() => {
        Axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log(response)
            })
    }, [])

    return (
        <h1>Probando</h1>
    );
}

export default Cervezas;