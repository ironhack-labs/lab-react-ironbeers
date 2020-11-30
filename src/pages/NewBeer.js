import React, {useState, useEffect} from 'react'
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Divider,
  message
} from 'antd'
import {newBeer} from '../services/beers'

const { Title } = Typography;

export default function NewBeer({history}) {
  const [newForm] = Form.useForm()

  async function submitForm(beer){
    let send = true
    Object.entries(beer).map((val) => {
      if(val[1]===undefined){
        message.error(`Value ${val[0]} empty`)
        send=false
      }
    })
    if (send){
      await newBeer(beer)
      newForm.resetFields()
      history.push('/beers')
    }
  }

  return (
    <div style={{textAlign: 'center'}}>
        <Col span={24}>
          <Title level={1} tyle={{ margin: '0 auto' }}>
            Create a new beer:
          </Title>
          <Divider />

          <Form form ={newForm} layout='vertical' onFinish={submitForm}>

            <Form.Item name='name' label='Name:'>
              <Input />
            </Form.Item>

            <Form.Item name='tagline' label='Tagline:'>
              <Input />
            </Form.Item>

            <Form.Item name='description' label='Description:'>
              <Input />
            </Form.Item>

            <Form.Item name='first_brewed' label='First Brewed:'>
              <Input />
            </Form.Item>

            <Form.Item name='brewers_tips' label='Brewers Tips:'>
              <Input />
            </Form.Item>

            <Form.Item name='attenuation_level' label='Attenuation Level:'>
              <Input />
            </Form.Item>

            <Form.Item name='contributed_by' label='Contributed By:'>
              <Input />
            </Form.Item>

            <Button type='primay' block htmlType='submit'>Submit</Button> 
          </Form>
        </Col> 
      </div>
  )
}