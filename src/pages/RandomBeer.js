import React, { useEffect, useState } from 'react';
import { getRandomBeer } from '../services/beers';
import { Card, Spin, Space, Row, Col } from 'antd';
import Header from '../components/Header';

const Beer = (props) => {
  const [beer, setBeer] = useState(null);

  async function setBeerApp() {
    const beerApp = await getRandomBeer();
    console.log(beerApp);
    setBeer(beerApp);
  }

  useEffect(() => {
    setBeerApp();
  }, []);

  return (
    <div>
      <Header />
      <Row gutter={[16, 16]}>
        {beer ? (
          <Col sm={24} md={12} lg={6}>
            <Card title={beer.name} key={beer._id}>
              <center>
                <img
                  style={{ height: '300px' }}
                  src={beer.image_url}
                  alt={beer.name}
                />
                <br />
                <p>{beer.tagline}</p>
                <p>{beer.attenuation_level}</p>
                <p>{beer.description}</p>
                <p>{beer.first_brewed}</p>
                <p>Created by: {beer.contributed_by}</p>
              </center>
            </Card>
          </Col>
        ) : (
          <Space size="large">
            <Spin size="large" />
          </Space>
        )}
      </Row>
    </div>
  );
};

export default Beer;
