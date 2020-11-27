import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Row, Col} from 'antd'
const { Meta } = Card

const Home = () => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>Iron-beers</h1>
            
            <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col xs={24} sm={24} md={8}>
            <Link to='/beers'>
            <Card
                hoverable
                style={{ width: 240, margin: "0 auto" }}
                cover={<img alt="example" src="https://www.chicagotribune.com/resizer/s6fO5FLwMrg9PRj6zUt_RB7ZeHY=/fit-in/800x533/smart/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/N554POZ7JZE3PDHHFSCFKEAKRA.jpg" />}
            >
                <Meta title="All beers" />
            </Card>
            </Link>
            </Col>
            <Col xs={24} sm={24} md={8}>
            <Link to='/random-beer'>
            <Card
                hoverable
                style={{ width: 240, margin: "0 auto" }}
                cover={<img alt="example" src="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/04/national-beer-day-640x514.jpg" />}
            >
                <Meta title="Random beer" />
            </Card>
            </Link>
            </Col>
            <Col xs={24} sm={24} md={8}>
            <Link to='/new-beer'>
            <Card
                hoverable
                style={{ width: 240, margin: "0 auto" }}
                cover={<img alt="example" src="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2019/04/national-beer-day-640x514.jpg" />}
            >
                <Meta title="New Beer" />
            </Card>
            </Link>
            </Col>
            </Row>
        </div>
    )
}

export default Home
