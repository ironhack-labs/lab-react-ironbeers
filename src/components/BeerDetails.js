import React, { Component } from 'react'
import {Card, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'

export default class BeerDetails extends Component {

  state={
    beer:''
  }

  componentDidMount(){
    console.log ('params: ', this.props.match.params.id)
    let id = this.props.match.params.id
    axios.get(`${API_URL}/${id}`)
      .then((res)=>{
        this.setState({beer: res.data}, ()=>{console.log(this.state)})
      })
  }
  

  render() {

    const {image_url, name, attenuation_level, tagline, first_brewed, description, contributed_by} = this.state.beer
  
    return (
      <div>
        <Card>
        <div className='beer-img-container'><Card.Img className='beer-img' variant="top" src={image_url} /></div>
          <Card.Body>
            <Row>
              <Col xs={9}><Card.Title>{name}</Card.Title></Col>
              <Col>{attenuation_level}</Col>
            </Row>
            <Row>
              <Col xs={9}><Card.Subtitle className="mb-2 text-muted">{tagline}</Card.Subtitle></Col>
              <Col>{first_brewed}</Col>
            </Row>
            
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Subtitle>{contributed_by}</Card.Subtitle>
          </Card.Body>
          
        </Card>
      </div>
    )
  }
}
