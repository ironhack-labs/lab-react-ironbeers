import React from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Col as="section">
                    <img style = {{width: "300px"}} src = "https://towardfreedom.org/wp-content/uploads/2014/09/0-1-0-beercorp2.jpg" />
                    <Link to = '/AllBeers'><h2>All Beers</h2></Link>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </Col>
                <Col as="section">
                    <img style = {{width: "300px"}} src = "https://www.craftmetropolis.co.uk/app/uploads/2019/04/Random-beer.jpg" />
                    <Link to = '/RandomBeer'><h2>Random Beer</h2></Link>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </Col>
                <Col as="section">
                    <img style = {{width: "300px"}} src = "https://wpcdn.us-east-1.vip.tn-cloud.net/www.channel3000.com/content/uploads/2020/04/new-ale-asylum-beer-1024x576.jpg" />
                    <Link to = '/NewBeer'><h2>New Beer</h2></Link>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </Col>
            </Row>
        </Container>
    )

}

export default HomePage