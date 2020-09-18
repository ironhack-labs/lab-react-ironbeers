import React, { useState, useEffect } from 'react'
import { Card, Spin, Space } from 'antd'
import Header from '../component/Header'
import { randomBeer } from '../services/beers'
const { Meta } = Card

const RandomBeer = () => {

    const [beer, setBeer] = useState(null)

    const fetchRandom = async () => {
        const beer = await randomBeer()
        setBeer(beer)
    }

    useEffect(() => {
        fetchRandom()
    }, [])

    return (<div>
        <Header />
        {
            beer ? (
                <Card
                    hoverable
                    cover={<img alt={beer.name} src={beer.image_url} style={{ height: 300, objectFit: 'contain' }} />}
                    style={{ textAlign: 'center', paddingTop: 20 }}
                >
                    <Meta title={beer.name} description={beer.tagline} />
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <small>Contributed by: {beer.contributed_by}</small>
                </Card>
            ) : (
                    <Space size='large'>
                        <Spin size='large' />
                    </Space>
                )
        }
    </div>)
}

export default RandomBeer
