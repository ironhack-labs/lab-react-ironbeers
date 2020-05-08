import React from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}

const buttonLayout = {
  wrapperCol: { offset: 9, span: 16 },
}

const NewBeerForm = ({ onFinish, onFinishFailed }) => {
  return (
    <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input the beer name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Tagline"
        name="tagline"
        rules={[{ required: true, message: 'Please input the tagline!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="First Brewed"
        name="first_brewed"
        rules={[{ required: true, message: 'Please input the first brewed!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Brewers Tips"
        name="brewers_tips"
        rules={[{ required: true, message: 'Please input the first brewed!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Attenuation Level"
        name="attenuation_level"
        rules={[{ required: true, message: 'Please input the attenuation level!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contributor"
        name="contributed_by"
        rules={[{ required: true, message: 'Please input the contributor!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...buttonLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default NewBeerForm
