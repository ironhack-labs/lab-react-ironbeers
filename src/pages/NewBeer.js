import React from 'react';
import { Row, Col, Form, Typography, Button, InputNumber } from 'antd';
import { newBeer } from '../services/beers';
import Header from '../components/Header';

const { Title } = Typography;

const RandomBeer = (props) => {
  const [form] = Form.useForm();

  async function createBeer(value) {
    await newBeer(value);
    props.history.push('/');
  }

  return (
    <div style={{ margin: '30px' }}>
      <Header />

      <Title level={1}>Create Beer</Title>
      <hr />
      <Form layout="vertical" form={form} onFinish={createBeer}>
        <Row>
          <Col sm={24} md={12}>
            <Form.Item name="name" label="name">
              <input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item name="tagline" label="tagline">
              <input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item name="description" label="description">
              <textarea style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item label="first brewed" name="first_brewed">
              <input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item label="brewer tips" name="brewers_tips">
              <input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item label="attenuation level" name="attenuation_level">
              <InputNumber style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col sm={24} md={12}>
            <Form.Item label="contributed by" name="contributed_by">
              <input style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Button htmlType="submit" block type="primary">
            Create
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default RandomBeer;
