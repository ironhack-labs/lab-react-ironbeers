import React, {useState, useEffect} from 'react'
import { Card, Row, Space, Spin, Typography } from 'antd';
import {getRandomeBeer} from "../services/beers"


function RandomBeer(props) {

    const [beer, setBeer] = useState(null)

    async function fetchBeer(){
        const randomBeer = await getRandomeBeer()
        console.log(randomBeer)
        setBeer(randomBeer)
        console.log(beer)
    }

    useEffect(()=> {
        fetchBeer()
    }, [])

    return (
        <Row gutter={[16, 16]}>
          <Card hoverable title={beer.name} style={{ width: 240 }} cover={ <img alt={beer.name} src={beer.image} /> }>
            <p>{beer.name}</p>   
            <p>{beer.tagline}</p>  
            <p>{beer.description}</p>  
            <p>{beer.first_brewed}</p>  
            <p>{beer.attenuation_level}</p> 
            <p>{beer.contributed_by}</p> 
        </Card>
    </Row>
    )
}

export default RandomBeer
