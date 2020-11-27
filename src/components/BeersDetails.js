import React, { useState, useEffect } from 'react'
import {getDetails} from '../services/getAllBeers.js'
import {Row, Space, Spin, Col, Card} from 'antd'
import { Link } from 'react-router-dom'

const BeersDetails = (props) => {
const [beers, setBeer]= useState(null)
useEffect(()=>{
    async function detailBeer(){
        const data= await getDetails(props.match.params.id)
        console.log(data)
        setBeer(data)
    }
    detailBeer() 
})
    return (
        <div>
            <Row gutter={[16, 16]}>
                {beers ? (
                    beers.map(beer => (
                    <Col key={beer._id} sm={24} md={12} lg={6}>
                    <Space align="center">
                        <Card
                            title={beer.name}
                            key={beer._id}>
                            <img style={{width: "100px", height: "200px", objectFit: "cover"}} src={beer.image_url} alt={beer.name}/>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <Link to={`/beer/${beer._id}`}>Beer</Link>
                        </Card>
                    </Space>  
                    </Col>
                ))
                ) : (
                <Space size='large'>
                    <Spin size='large' />
                </Space>
                )}
            </Row>
        </div>
    )
}

export default BeersDetails