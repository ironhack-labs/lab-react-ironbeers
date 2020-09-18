import React, {useState, useEffect} from 'react'
import HeaderLayout from "../components/Header"
import {getAllBeers} from "../services/BeerService"
import { Card, Spin, Space, Row, Col } from "antd"
import { Link } from "react-router-dom"


const Beers = () => {

    const [beers, setBeers] = useState(null)

    const fetchBeers = async () => {

        const beers = await getAllBeers()
        setBeers(beers)
    }
    
    useEffect(() => {
        fetchBeers()
    }, [])

    return (
        <div>
            
            <Row>
            {/* Aqui va el Header */}
            
            </Row> 
            <HeaderLayout>
                <center>
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
                            <Link to={`/beer/${beer._id}`}>Ver Cerveza</Link>
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
            </center>
            </HeaderLayout>
            
        </div>
    )
}

export default Beers
