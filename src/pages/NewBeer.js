import React from 'react'
import { Form, Input, Button } from 'antd';
import { newBeer } from "../services/beers"

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  
function NewBeer(props) {
    
    const [form] = Form.useForm()

    async function createBeer(value){
        await newBeer(value)
        props.history.push('/')
     }

    return (
        <Form form={form} {...layout} onFinish={createBeer} >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="tagline" label="Tagline" htmlType="text">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" htmlType="text">
        <Input />
      </Form.Item>
      <Form.Item name="first_brewed" label="First Brewed" htmlType="text">
        <Input />
      </Form.Item>
      <Form.Item name="brewers_tips" label="Brewer Tips" htmlType="text">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="attenuation_level " label="Attenuation Level" htmlType="number">
        <Input />
      </Form.Item>
      <Form.Item name="contributed_by" label="Contributed By" htmlType="text">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
}

export default NewBeer