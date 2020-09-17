import React, { useState, useEffect } from 'react';
import { Card, Spin, Space, Row, Col } from 'antd';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col sm={24} md={12} lg={6}>
        <Card title="All Beers" extra={<Link to={`/beers`}>All beers</Link>}>
          <img
            src="https://image.shutterstock.com/image-photo/assorted-beers-flight-ready-tasting-260nw-259774421.jpg"
            alt="beers"
          />
          <p></p>
        </Card>
        <Card
          title="Random Beer"
          extra={<Link to={`/random`}>Random Beer</Link>}
        >
          <img
            src="https://image.shutterstock.com/image-photo/assorted-beers-flight-ready-tasting-260nw-259774421.jpg"
            alt="beers"
          />
          <p></p>
        </Card>
        <Card title="New Beer" extra={<Link to={`/new`}>New Beer</Link>}>
          <img
            src="https://image.shutterstock.com/image-photo/assorted-beers-flight-ready-tasting-260nw-259774421.jpg"
            alt="beers"
          />
          <p></p>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
