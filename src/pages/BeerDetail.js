import React, { useEffect, useState } from 'react'
import { Card, Row, Space, Spin, Typography } from 'antd';
import { getBeer } from "../services/beers"
const { Meta } = Card;

const {Title, Text} = Typography


const BeerDetail = ({
    match: {
        params: { beerId }
}
}) => {

    const [beer, setBeer] = useState({})

    async function fetchBeer(){
        const beerInfo = await getBeer(beerId)
        console.log(beerInfo)
        setBeer(beerInfo)
        console.log(beer)
    }


    useEffect( () => {
        fetchBeer()
    },[])
     
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

export default BeerDetail
