import { Button, Col, Input, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewBeer } from '../service/services'

export default function NewBeer() {
  const navigate = useNavigate()
  async function createBeer (e){
    e.preventeDefault()
    const name = e.target[0].value
    const tagline = e.target[1].value
    const description = e.target[2].value
    const first_brewed = e.target[3].value
    const brewer_tips = e.target[4].value
    const attenuation_level = e.target[5].value
    const contributed_by = e.target[6].value

    await createNewBeer({name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by})
  }
  return (

    <Row justify="center">
        <Col span={20}>
          <form onSubmit={createBeer}>
            <label htmlFor="name">
              Name:
              <Input type="text" name="name" id="name" />
            </label>
            <label htmlFor="tagline">
              Tagline:
              <Input type="text" name="tagline" id="tagline" />
            </label>
            <label htmlFor="description">
              Descripition:
              <Input type="text" name="description" id="description" />
            </label>
            <label htmlFor="first_brewed">
              First brewed:
              <Input type="text" name="first_brewed" id="first_brewed" />
            </label>
            <label htmlFor="brewer_tips">
              Brewer Tips:
              <Input type="text" name="brewer_tips" id="brewer_tips" />
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
              className='buttonSubmit'
              htmlType="submit"
              type="primary"
              block
              style={{ marginTop: "1rem" }}
            >
              Create Beer
            </Button>
          </form>
        </Col>
      </Row>
  )
}
