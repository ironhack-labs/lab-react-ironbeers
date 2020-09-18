import React, {useState, useEffect} from 'react'
import { Card, Spin, Space, Row, Button } from 'antd';
import { getBeers } from "../services/beers"
import { Link } from 'react-router-dom';

const { Meta } = Card;

function Beers() {
    const [beers, setBeers] = useState()

    async function fetchBeers() {
        const beers = await getBeers()
        setBeers(beers)
    }

    useEffect(()=>{
        fetchBeers()
    }, [])

    return (
    <Row gutter={[16, 16]}>
        {beers ? (beers.map(beer => (
            <Card
                style={{ width: 300 }}
                key={beer._id}
                cover={
            <img
                alt="example"
                src={beer.image_url}
                style={{ width: 100 }}
            />
            }
            actions={[
            <Button primary><Link to={`/${beer._id}`}>Details</Link></Button>,
            ]}
        >
            <Meta
            title={beer.name}
            description={beer.tagline}
            />
        </Card> 
        ))
    
        ) : (
             <Space size='large'>
                <Spin size='large' />
            </Space>
         )}
    </Row>
    )
}

export default Beers
