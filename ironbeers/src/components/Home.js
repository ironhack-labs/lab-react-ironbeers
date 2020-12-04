import React, { Component } from 'react'
import { Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

class Home extends Component {

  render() {
    return (
      <Col md={4}>
        <Card className="beer-card">
          <Card.Img
            variant="top"
            src={"https://www.fotopanorama.com/wp-content/uploads/2015/06/img_estrellagalicia-1078x516.jpg"}
          />
          <Card.Body>
            <Card.Title>All Beers</Card.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
              tincidunt mauris, quis commodo ante.
          </p>
            <Link className="btn btn-dark btn-block btn-sm" to={"/beers"} > Go!</Link>
          </Card.Body>
        </Card>
        <Card className="beer-card">
          <Card.Img
            variant="top"
            src={"https://i0.wp.com/www.mundohr.com/wp-content/uploads/2019/02/Estrella-Galicia-Carnaval-2019.jpg"}
          />
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
              tincidunt mauris, quis commodo ante.
          </p>
            <Link className="btn btn-dark btn-block btn-sm" to={"/random-beer"} >Go!</Link>
          </Card.Body>
        </Card>
        <Card className="beer-card">
          <Card.Img
            variant="top"
            src={"https://s03.s3c.es/imag/_v0/640x450/f/c/e/estrella-galicia-2.jpg"}
          />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
              tincidunt mauris, quis commodo ante.
          </p>
            <Link className="btn btn-dark btn-block btn-sm" to={"/new-beer"} >Go!</Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default Home
