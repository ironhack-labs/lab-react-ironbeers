import React,{Component} from 'react';
import axios from 'axios';
import {Form, Row, Col, Button} from "react-bootstrap";

class Newbeer extends Component{

  handleSubmit = (e) => {

     console.log('docuzzzzzzz',document.getElementById('tagline').value)
    axios.post('https://ih-beer-api.herokuapp.com/beers',
      {
        "name":document.getElementById('name').value,
        "tagline":document.getElementById('tagline').value,
        "description": document.getElementById('description').value,
        "first_brewed": document.getElementById('first_brewed').value,
        "brewers_tips":document.getElementById('brewers_tips').value,
        "attenuation_level":document.getElementById('attenuation_level').value,
        "contributed_by":document.getElementById('contributed_by').value
      }

        // document.getElementById('name').value

  )
      .then(res=>{
        console.log(res)
      })

      .catch(err=>{
        console.log(err)
      })

  }

  render() {
    return(
      <Row>
        <Col xs={4}>
        </Col>
        <Col xs={4}>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control   name="name"
                            id="name"
                            type="text"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Tagline</Form.Label>
            <Form.Control
            id="tagline"
            name="tagline"
            type="text"
          />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label> Description</Form.Label>
            <Form.Control
              id="description"
              name="description"
              type="text"
            />


            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First brewed</Form.Label>
            <Form.Control
              id="first_brewed"
              name="first_brewed"
              type="text"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First brewed</Form.Label>
            <Form.Control
              id="brewers_tips"
              name="brewers_tips"
              type="text"
            />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Attenuation level</Form.Label>
            <Form.Control
            id="attenuation_level"
            name="attenuation_level"
            type="number"
          />
          </Form.Group>

          </Form.Group><Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>contributed by</Form.Label>
            <Form.Control
            id="contributed_by"
            name="contributed_by"
            type="text"
          />
          </Form.Group>

        <div className="input-field"><br/>
          <Button onClick={this.handleSubmit}   variant="outline-success"> Crear cuenta</Button>
        </div>
        </Col>
        <Col xs={4}>
        </Col>
      </Row>
    );
  }
}

export default Newbeer;