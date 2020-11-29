import React from 'react';
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Divider,
  message,
  DatePicker,
} from 'antd';

import { newBeer } from '../services/beers';

const { Title } = Typography;

export default function NewBeer({ history }) {
  const [beerForm] = Form.useForm();

  async function submitForm(beer) {
    let send = true;
    Object.entries(beer).map((val) => {
      if (val[1] === undefined) {
        message.error(`Campo ${val[0]} vacio`);
        send = false;
      }
    });
    if (send) {
      await newBeer(beer);
      beerForm.resetFields();
      history.push('/beers');
    }
  }

  return (
    <div style={{ padding: '1rem 3rem' }}>
      <Row>
        <Col span={24}>
          <Title level={1} tyle={{ margin: '0 auto' }}>
            Create a new beer:
          </Title>
          <Divider />

          <Form form={beerForm} layout="vertical" onFinish={submitForm}>
            <Form.Item name="name" label="Name:">
              <Input />
            </Form.Item>

            <Form.Item name="tagline" label="Tagline:">
              <Input />
            </Form.Item>

            <Form.Item name="description" label="Description:">
              <Input />
            </Form.Item>

            <Form.Item name="first_brewed" label="First brewed:">
              <Input />
            </Form.Item>

            <Form.Item name="brewers_tips" label="Brewers tips:">
              <Input />
            </Form.Item>

            <Form.Item name="tagline" label="Tagline:">
              <Input />
            </Form.Item>

            <Form.Item name="attenuation_level" label="Attenuation_level:">
              <Input />
            </Form.Item>

            <Form.Item name="contributed_by" label="Contributed by:">
              <Input />
            </Form.Item>

            <Button type="primary" block htmlType="submit">
              Create Beer!
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
