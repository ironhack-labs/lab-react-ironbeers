import { Col, Card, Button, Container, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import './HomePage.css'


export default class HomePage extends Component { 
  
  constructor(){
      super()
      this.state = {

      }
  }
  
  
  render(){
  
    return (
        <>
     
        <Container className="home-page">
            <Row>
                <Col id='home-image' md={{ span:6, offset: 3 }}>
            <div>
                <img src='https://dam.ngenespanol.com/wp-content/uploads/2019/08/tipos-de-cerveza-2.jpg' alt='Tiradores de cerveza'/>
                <Link to='/beers'>All Beers</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, suscipit facere eum eaque illum quisquam enim atque adipisci provident in assumenda rem! Dolor, expedita dolorem. Ex libero maxime nulla cumque!</p>
                </div> 
            <div>
                <img src='https://www.labarracadelaspapas.com/wp-content/uploads/2016/04/IMG_2382-1200x900.jpg' alt='Tiradores de cerveza'/>
                <Link to='/random-beer'>Random Beer</Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, suscipit facere eum eaque illum quisquam enim atque adipisci provident in assumenda rem! Dolor, expedita dolorem. Ex libero maxime nulla cumque!</p>
            </div>
            <div>
                <img src='https://www.beersandtrips.com/wp-content/uploads/2018/08/historia_cerveza.jpg' alt='Tiradores de cerveza'/>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, suscipit facere eum eaque illum quisquam enim atque adipisci provident in assumenda rem! Dolor, expedita dolorem. Ex libero maxime nulla cumque!</p>
            </div>
                </Col>
            </Row>
        </Container>
        </>
        )
    }
}