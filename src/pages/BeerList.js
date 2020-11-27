import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Typography, } from 'antd'
import { Link } from 'react-router-dom'
import { getAllBeers } from '../services/beers'

const { Title, Text } = Typography

const BeerList = () =>{
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        async function getBeers() {
        const { data: allBeers } = await getAllBeers()
            setBeers(allBeers)
        }
        getBeers()
    }, [])

    return <div style={{ padding: '1rem 3rem' }}>
        <Title level={1}>Beers</Title >
        <Row gutter={[16, 16]}>
        {beers?.map(beer => (
            <Col xs={24} sm={24} md={12} key={beer._id}>
            <img src={beer.image}></img>
            <Card
                hoverable
                style={{ width: 500}}
                cover={<img style={{height: 200, width: 100}} alt="example" src={beer.image_url} />}
                >
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>Created_by: {beer.contributed_by}</p>
                <Link to={`/beer/${beer._id}`}>See Details</Link>
            </Card>
            </Col>
        ))}
        </Row>
    </div>
}

export default BeerList