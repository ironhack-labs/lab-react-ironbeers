import React, { useState, useEffect } from 'react'
import { Card, Spin, Space, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { getBeers, searchBeer } from '../services/beers'
import Header from '../component/Header'
const { Meta } = Card

const AllBeers = () => {

    const [beers, setBeers] = useState(null)

    async function fetchBeers() {
        const beers = await getBeers()
        setBeers(beers)
    }

    async function lookBeer({ target: { value } }) {
        const beers = await searchBeer(value)
        setBeers(beers)
    }

    useEffect(() => {
        fetchBeers()
    }, [])

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Header />
            </Col>

            <Col span={24}>
                <label htmlFor='search'>Search for a beer:</label>
                <input style={{ width: '100%' }} type='text' name='search' onChange={lookBeer} />
            </Col>

            {beers ? (
                beers.map(beer => {
                    return (
                        <Col xs={24} md={8} key={beer._id}>
                            <Link to={`/beers/${beer._id}`}>
                                <Card
                                    hoverable
                                    cover={<img alt={beer.name} src={beer.image_url} style={{ height: 200, objectFit: 'contain' }} />}
                                >
                                    <Meta title={beer.name} description={beer.tagline} />
                                    <small>Contributed by: {beer.contributed_by}</small>
                                </Card>
                            </Link>
                        </Col>
                    )
                })
            ) : (
                    <Col span={24}>
                        <Space size='large'>
                            <Spin size='large' />
                        </Space>
                    </Col>
                )}
        </Row>
    )
}

export default AllBeers
