import React, {useState, useEffect} from 'react'
import { getAllBeers } from '../services/Beers'
import { Card, Row, Col, Skeleton } from 'antd'
import {Link} from 'react-router-dom'

const { Meta } = Card;

const Beers = () => {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        async function getBeers() {
            try {
            const {data: allBeers} = await getAllBeers()
            setBeers(allBeers)
        } catch(err) {
            console.log(err)
        }
    }
    getBeers()
}, [])


    return (
        <div className="site-card-wrapper">
            <Row gutter={16}>
            {beers ? beers.map(b=>{
                return ( 
                <Col span={8}>
                <Link to={`/beer/${b._id}`}>
                <Card
                    style={{ width: 300, margin: "30px auto" }}
                    cover={
                    <img style={{
                        height: 200,
                        width: "auto",
                        margin: "0 auto"
                    }}
                        alt={b.name}
                        src={b.image_url}
                    />
                    }>
                    <Meta
                    title={b.name}
                    description={`${b.tagline} Created by: ${b.contributed_by}`}
                    />
                </Card>
                </Link>
                </Col>    
                )
            }) : <Skeleton />}
            </Row>
        </div>
    )
}

export default Beers
