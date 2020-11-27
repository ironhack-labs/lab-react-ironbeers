import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Form, Input, InputNumber, Button} from 'antd'
import { addNewBeer } from '../services/Beers';

const layout = {
    labelCol: { sm:{offset: 1, span: 22}, md: {offset: 8, span: 8} },
    wrapperCol: { sm:{offset: 1, span: 22}, md: {offset: 8, span: 8} },
  };
  const tailLayout = {
    wrapperCol: { sm:{offset: 1, span: 22}, md: {offset: 8, span: 8} },
  };
  const { TextArea } = Input;

const NewBeer = () => {
    const history = useHistory()

    const onFinish = async (values) => {
        await addNewBeer(values)
        history.push('/beers')
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div>
            <h1>Create new beer</h1>

            <Form
                {...layout}
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'The name of the new beer' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Tagline"
                    name="tagline"
                    rules={[{ required: true, message: 'The tagline of the new beer' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'The description of the new beer' }]}
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="First brewed"
                    name="first_brewed"
                    rules={[{ required: true, message: 'The first time this beer was brewed' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Attenuation level"
                    name="attenuation_level "
                    rules={[{ required: true, message: 'The attenuation level of the new beer' }]}
                >
                    <InputNumber min={1} max={10} defaultValue={3} />
                </Form.Item>

                <Form.Item
                    label="Creator"
                    name="contributed_by"
                    rules={[{ required: true, message: 'The name of the creator of the new beer' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Add new beer
                    </Button>
                </Form.Item>
                </Form>
        </div>
    )
}

export default NewBeer
