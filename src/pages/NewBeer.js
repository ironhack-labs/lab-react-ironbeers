import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { redirect } from 'react-router-dom'
import { createNewBeer } from '../service/services'

export const newBeerAction = async({request}) => {
  let formData = await request.formData()
	const name = formData.get("name")
	const tagline = formData.get("tagline")
	const description = formData.get("description")
	const first_brewed = formData.get("first_brewed")
	const brewers_tips = formData.get("brewers_tips")
	const attenuation_level = formData.get("attenuation_level")
	const contributed_by = formData.get("contributed_by")


    await createNewBeer({name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
    console.log ({name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}) 
    return redirect ('/beers')
  }

  function NewBeer () {
    return (
    <Row justify="center">
        <Col span={20}>
          <Form method="post" action='/new'>
            <label htmlFor="name">
              Name:
              <Input type="text" name="name" id="name"/>
            </label>
            <label htmlFor="tagline">
              Tagline:
              <Input type="text" name="tagline" id="tagline" />
            </label>
            <label htmlFor="description">
              Description:
              <Input type="text" name="description" id="description" />
            </label>
            <label htmlFor="first_brewed">
              First brewed:
              <Input type="text" name="first_brewed" id="first_brewed" />
            </label>
            <label htmlFor="brewers_tips">
              Brewer Tips:
              <Input type="text" name="brewers_tips" id="brewers_tips" />
            </label>
            <label htmlFor="attenuation_level">
              Attenuation level:
              <Input type="number" name="attenuation_level" id="attenuation_level" min={0}/>
            </label>
            <label htmlFor="contributed_by ">
             Contributed by:
              <Input type="text" name="contributed_by " id="contributed_by " />
            </label>
            <Button
              htmlType="submit"
              type="primary"
              block
              style={{ marginTop: "1rem" }}
            >
              Create Beer
            </Button>
          </Form>
        </Col>
      </Row>
    )
}
export default NewBeer