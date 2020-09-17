import React, { useEffect, useState } from 'react';
import { getBeers } from '../services/beers';
import { Card, Spin, Space, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Beers = () => {
  const [beers, setBeers] = useState(null);

  async function setBeersApp() {
    const beersApp = await getBeers();
    console.log(beersApp);
    setBeers(beersApp);
  }

  useEffect(() => {
    setBeersApp();
  }, []);

  return (
    <div>
      <Header />
      <Row gutter={[16, 16]}>
        {beers ? (
          beers.map((beer) => (
            <Col sm={24} md={12} lg={6}>
              <Card
                title={beer.name}
                key={beer._id}
                extra={<Link to={`/beer/${beer._id}`}>Details</Link>}
              >
                <img
                  style={{ height: '100px' }}
                  src={beer.image_url}
                  alt={beer.name}
                />
                <br />
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </Card>
            </Col>
          ))
        ) : (
          <Space size="large">
            <Spin size="large" />
          </Space>
        )}
      </Row>
    </div>
  );
};

export default Beers;
