import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { useHistory } from 'react-router-dom';
const NewBeer = () => {
  const history = useHistory();
  const sendFormData = (data) => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((data) => {
        alert('Beer created succesfully!');
        history.push('/beers');
      })
      .catch((err) => console.error(err));
  };

  return (
    <Form onFinish={sendFormData} labelCol={{ span: 6 }} wrapperCol={{ span: 24 }} layout="horizontal" size="default">
      <Form.Item label="Beer Name" name="name" rules={[{ required: true, message: 'This field is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Tagline" name="tagline" rules={[{ required: true, message: 'This field is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description" rules={[{ required: true, message: 'This field is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="First Brewed" name="first_brewed" rules={[{ required: true, message: 'This field is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Brewers Tips" name="brewers_tips" rules={[{ required: true, message: 'This field is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Attenuation Level" name="attenuation_level" rules={[{ type: 'number', required: true, message: 'This field is required' }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Contributed By" name="contributed_by" rules={[{ required: true, message: 'This field is required' }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewBeer;
