import React from 'react'
import {
    Row,
    Col,
    Typography,
    Form,
    Input,
    Button,
    Divider,
    message,
    InputNumber
} from 'antd'

import { createBeer } from '../services/beers'

const { Title } = Typography



function NewBeer({ history }) {
        const [form] = Form.useForm()

        async function submitForm(newBeer) {
            // TODO: Enviar el proyecto al backend... mediante nuestro servicio y..... Redirigir al inicio.
            let send = true
            Object.entries(newBeer).map(val => {
            if (val[1] === undefined) {
                message.error(`Campo ${val[0]} vacio`)
                send = false
            }
            })
            if (send) {
                await createBeer(newBeer)
                form.resetFields()
                // usamos history que es un prop que existe para los componentes del Router y su metodo push para redirigir que recibe una ruta.
                history.push('/')

            }
        }

        return (
            <div style={{ padding: '1rem 3rem' }}>
            <Row>
                <Col span={24}>
                <Title level={1}>Add a New Beer</Title>
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
                    <Input />
                    </Form.Item>

                    <Form.Item name="brewers-tips" label="Brewers' tips:">
                    <Input />
                    </Form.Item>

                    <Form.Item name="attenuation_level" label="Attenuation level:">
                    <InputNumber />
                    </Form.Item>

                    <Form.Item name="contributed by" label="Contributed by:">
                    <Input />
                    </Form.Item>

                    <Button type="primary" block htmlType="submit">
                    Create
                    </Button>

                </Form>
                </Col>
            </Row>
            </div>
        )
}

export default NewBeer
