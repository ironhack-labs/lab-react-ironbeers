import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './homeComponent.css'




const HomeComponent = () => {

    return (
        <>
            <Row>
                <Col md={4}>
                    <Card className= 'card-home'>
                        <Card.Img variant='top' src='https://52brews.com/wp-content/uploads/2018/07/All-The-Different-Types-and-Styles-of-Beer.jpg'/>
                        <Card.Body>
                            <Card.Title><Link to={'/beers'} >Show Beers</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='card-home'>
                        <Card.Img variant='top' src='https://allaboutbeer.com/wp-content/uploads/2018/08/AAB_WEB_20180831_Sixer_Newsletter-290x241.jpg' />
                        <Card.Body>
                            <Card.Title><Link to={'/random'} >Random Beer</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='card-home'>
                        <Card.Img variant='top' src='https://52brews.com/wp-content/uploads/2018/07/All-The-Different-Types-and-Styles-of-Beer.jpg' />
                        <Card.Body>
                            <Card.Title><Link to={'/beers/new'} >New Beer</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default HomeComponent