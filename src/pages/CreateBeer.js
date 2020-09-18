import React, {useState} from 'react'
import { Button, Form } from "antd"
import { createBeer } from "../services/beers"


const CreateBeer = props  => {
    
const [form] = Form.useForm()
		

    async function newBeer(value) {
        await createBeer(value)
        props.history.push('/')
    }
    
    return (
		<div>
			<Form form={form} onFinish={newBeer}>
                <Form.Item label='Name' name='name' type='text'>
                    <input />
                </Form.Item>
                <Form.Item label='Tagline' name='tagline' type='text'>
                    <input />
                </Form.Item>
                <Form.Item label='Description' name='description' type='text'>
                    <input />
                </Form.Item>
                <Form.Item label='First_brewed' name='first_brewed' type='text'>
                    <input />
                </Form.Item>
                <Form.Item label='Brewers_tips' name='brewers_tips' type='text'>
                    <input />
                </Form.Item>
                <Form.Item label='Attenuation_level' name='attenuation_level' type='text'>
                    <input />
                </Form.Item>
                <Form.Item label='Contributed_by ' name='contributed_by ' type='text'>
                    <input />
                </Form.Item>
                <Button htmlType='submit' block>Create Beer</Button>
            </Form>
		</div>
	)
}

export default CreateBeer
