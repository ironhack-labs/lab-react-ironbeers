import React from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}

const buttonLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

function CreateForm({ handleSubmit }) {
  return (
    <Form {...layout}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Tagline" name="tagline">
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>
      <Form.Item label="First brewed" name="first_brewed">
        <Input />
      </Form.Item>
      <Form.Item label="Brewers Tips" name="brewers_tips">
        <Input />
      </Form.Item>
      <Form.Item label="Attenuation Level" name="attenuation_level">
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
