import React from 'react'
import HeaderLayout from '../components/Header'
import { Row, Col, Form, Typography, Button, InputNumber } from "antd"
import {newBeer} from "../services/BeerService"


const { Title } = Typography

const NewBeer = (props) => {

    const [form] = Form.useForm()

    async function addBeer(value) {
        console.log(value)
        let result = await newBeer(value)
        props.history.push("/")
    }  

    return (
        <div>
            <HeaderLayout>
                <center >
            <Title level={1}>Add new Beer</Title>
            <hr />
            <Form layout='vertical' form={form} onFinish={addBeer}>
                <Row>
                <Col sm={24} md={12}>
                    <Form.Item name='name' label='Name'>
                        <input style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item name='tagline' label='Tagline'>
                        <input style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item name='description' label='Description'>
                        <input style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item name='first_brewed' label='First Brewed'>
                        <input style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item name='brewers_tips' label='Brewers Tips'>
                        <input style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item name='attenuation_level' label='Attenuation Level'>
                        <InputNumber min={1} max={1000} style={{ width: "100%" }}/>
                    </Form.Item>
                </Col>
                <Col sm={24} md={12}>
                    <Form.Item name='contributed_by' label='Contributed By'>
                        <input style={{ width: "100%" }} />
                    </Form.Item>
                </Col>
                <Button htmlType='submit' block type='primary'>
                    Create
                </Button>
                </Row>
            </Form>
            </center>
            </HeaderLayout>            
        </div>
    )
}

export default NewBeer
