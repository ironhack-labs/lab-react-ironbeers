import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Headers from '../components/Header'

import {HomeOutlined} from '@ant-design/icons'
import {Layout,Typography, Col, Row, Divider, Form, Input, DatePicker, Button} from 'antd'
const {Title, Text}=Typography
const {Header, Content}=Layout

const baseURL="https://ih-beers-api2.herokuapp.com/beers/new"

function NewBeer() {

    const [form]=Form.useForm()

    async function submitForm(beer){
        console.log(beer)
           await axios.post(`${baseURL}`, beer)
           form.resetFields()
    }
    
    return (
        <Layout className="layout">
            <Headers/>
            <Content style={{ padding: '10px 40px' }}>
        
            <div style={{ padding: '1rem 3rem' }}>
      <Row>
        <Col span={24}>
          <Title level={1}>Create a new Beer:</Title>
          <Divider />

          <Form form={form} layout="vertical" onFinish={submitForm}>
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
              <DatePicker />
            </Form.Item>

            <Form.Item name="brewers_tips" label="Brewer's tips:">
              <Input />
            </Form.Item>
            
            <Form.Item name="attenuation_level" label="Attenuation Level:">
              <Input type="number"/>
            </Form.Item>

            <Form.Item name="contributed_by" label="Contributed by:">
              <Input />
            </Form.Item>

            <Button type="primary" block htmlType="submit">
              Add New
            </Button>

          </Form>
        </Col>
      </Row>
    </div>

        </Content>
        </Layout>   
    )
}

export default NewBeer
