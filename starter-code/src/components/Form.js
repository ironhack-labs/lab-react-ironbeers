import React from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 4 },
}

const buttonLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

function CreateForm({ onFinish, onFinishFailed }) {
  return (
    <Form {...layout} onFinishFailed={onFinishFailed} onFinish={onFinish}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Tag Line" name="tagline">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item label="Contributed By" name="contributed_by">
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

export default CreateForm