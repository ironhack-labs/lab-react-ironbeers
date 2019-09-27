import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onValueChange = this.onValueChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // onValueChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   console.log(event.target.name);
  //   this.props.onValueChange({
  //     [name]: value
  //   });
  // }

  render() {
    return (
      <div>
        <Container>
          <form>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onValueChange}
                />
              </Col>
              {/* <Col>
                <Form.Control
                  type="text"
                  placeholder="Tagline"
                  // name=
                  value={this.state.tagline}
                />
              </Col> */}
            </Row>
            {/* <Row>
              <Col>
                <Form.Control type="text" placeholder="Description" value={this.state}/>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="First Brewed" value={this.state}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control type="text" placeholder="Brewing Tips" value={this.state}/>
              </Col>
              <Col>
                <Form.Control type="number" placeholder="Attenuation Level" value={this.state}/>
              </Col>
              <Col>
                <Form.Control type="number" placeholder="Contributed by" value={this.state}/>
              </Col>
            </Row> */}
            <Button type="submit" value="Submit">
              Submit
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}
