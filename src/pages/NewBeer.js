import React from "react"
import { Button, Form, Typography } from "antd"
import { newBeer } from "../services/beers"
import Header from "../component/Header"

const { Title } = Typography

const NewBeer = ({ history }) => {

    const [form] = Form.useForm()

    async function sendBeer(value) {
        await newBeer(value)
        history.push('/beers')
    }

    return (
        <div>
            <Header />
            <Title level={1}>Create Beer </Title>
            <Form form={form} onFinish={sendBeer} layout='vertical'>
                <Form.Item label='Name:' name='name' type='text'>
                    <input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label='Tagline:' name='tagline' type='text'>
                    <input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label='Description:' name='description' type='text'>
                    <input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label='First brewed:' name='first_brewed' type='text'>
                    <input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label='Brewers tips:' name='brewers_tips' type='text'>
                    <input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label='Attenuation Level:' name='attenuation_level' type='number'>
                    <input style={{ width: '100%' }} />
                </Form.Item>
                <Form.Item label='Contributed by:' name='contributed_by' type='text'>
                    <input style={{ width: '100%' }} />
                </Form.Item>
                <Button htmlType='submit' block type='primary'>ADD NEW</Button>
            </Form>
            <br />
        </div>
    )
}

export default NewBeer
