import React, { useState, useEffect } from 'react';

import axios from 'axios';

const BeerCard = ({detail: {url}}) => {

    let [data, setData] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h4>{data.name}</h4>
            <img src={data.image_url && data.image_url} alt=""/>
        </div>
    )
}


export default BeerCard;