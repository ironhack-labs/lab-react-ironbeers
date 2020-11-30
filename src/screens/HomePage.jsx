import React from 'react';
import { Card, Row, Col, Divider, Layout, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const rowStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const HomePage = () => {
  return (
    <>
      <Title>Welcome to IronBeers</Title>
      <Row gutter={16} justify="center">
        <Col style={rowStyle} span={8}>
          <Card title="All Beers" extra={<Link to="/beers">Go to</Link>} style={{ width: 300 }}></Card>
        </Col>
        <Col style={rowStyle} span={8}>
          <Card title="Random Beer" extra={<Link to="/test">Go to</Link>} style={{ width: 300 }}></Card>
        </Col>
        <Col style={rowStyle} span={8}>
          <Card title="New Beer" extra={<Link to="/">Go to</Link>} style={{ width: 300 }}></Card>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
