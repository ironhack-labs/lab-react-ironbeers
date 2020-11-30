import React from 'react';
import { Card, Row, Col, Typography, Space } from 'antd';
const { Title, Text } = Typography;
const BeerCard = ({ beer }) => {
  console.log(beer);
  return (
    <Card
      cover={
        <img alt="example" src={beer.image_url} style={{ height: 200, width: 'auto', margin: 'auto', marginTop: 20 }} />
      }
      title={beer.name}
      style={{ width: 500, maxWidth: '100%' }}
    >
      <Title level={3}>{beer.tagline}</Title>
      <Row justify="space-between">
        <Col>
          <Text type="secondary">Attenuation level: {beer.attenuation_level}</Text>
        </Col>
        <Col>
          <Text type="secondary">{beer.first_brewed}</Text>
        </Col>
      </Row>
      <Space direction="vertical">
        <Text>{beer.description}</Text>

        <Text type="secondary">Created by: {beer.contributed_by}</Text>
      </Space>
    </Card>
  );
};

export default BeerCard;
