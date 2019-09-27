import React, { Component } from "react";
import Header from "../components/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default class Beer extends Component {
  render() {
    const list = this.props.beerList;
    return (
      // <div>
      //   <Header />
      //   <Container>
      //     <Row>
      //       {list.map(item => (
      //         <Link className="" to={`/${item._id}`}>
      //           <Col className="mx-5">
      //             <Image className="w-50" src={item.image_url}></Image>
      //             <p>{item.name}</p>
      //             <p>{item.tagline}</p>
      //           </Col>
      //         </Link>
      //       ))}
      //     </Row>
      //   </Container>
      // </div>

      <div>
        <Header />
        <Container>
          {list.map(item => (
            <Card className="card mb-3 justify-content-center">
              <Link className="" to={`/${item._id}`}>
                <Row className="row no-gutters justify-content-center">
                  <Col>
                    <Image
                      src={item.image_url}
                      className="card-img w-25"
                      alt="..."
                    />
                  </Col>
                  <Col>
                    <Card.Body className="card-body">
                      <Card.Title className="card-title">
                        {item.name}
                      </Card.Title>
                      <Card.Subtitle>.{item.tagline}</Card.Subtitle>
                    </Card.Body>
                  </Col>
                </Row>
              </Link>
            </Card>
          ))}
        </Container>
      </div>
    );
  }
}
