import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

const Home = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col sm={24} md={8}>
                <Link to={'/beers'}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://cdn.pixabay.com/photo/2013/11/12/01/29/bar-209148_1280.jpg" />}
                    >
                        <Meta title="All beers" description="Lorem ipsum" />
                    </Card>
                </Link>
            </Col>
            <Col sm={24} md={8}>
                <Link to={'/beers/random'}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://cdn.pixabay.com/photo/2016/07/13/01/01/beer-1513436_1280.jpg" />}
                    >
                        <Meta title="Ramdom beer" description="Lorem Ipsum" />
                    </Card>
                </Link>
            </Col>
            <Col sm={24} md={8}>
                <Link to={'/beers/new'}>
                    <Card
                        hoverable
                        cover={<img alt="example" src="https://cdn.pixabay.com/photo/2018/05/31/16/51/glass-of-beer-3444480_1280.jpg" />}
                    >
                        <Meta title="New beer" description="Lorem Ipsum" />
                    </Card>
                </Link>
            </Col>
        </Row>
    )
}

export default Home
