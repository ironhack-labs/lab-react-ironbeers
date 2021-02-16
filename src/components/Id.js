import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Header from './Header'

function Id(props) {
    let [beer, setBeer] = useState([''])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
        .then((res) => {
            console.log(res);
            setBeer(res.data)
        })
    }, []);

    return (
        <div>
            <Header/>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} alt='' />
        </div>
    );
}

export default Id;