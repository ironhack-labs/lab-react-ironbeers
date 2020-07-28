import React from 'react';
import NavigationBar from './NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';

const RandomBeerPage = (props) => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default RandomBeerPage;
