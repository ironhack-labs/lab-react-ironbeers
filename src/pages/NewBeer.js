import { Button, Col, Divider, Input, Row } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewBeer } from '../service/services'

function NewBeer() {
  const navigate = useNavigate()
  async function createBeer(e) {
    e.preventDefault()

    const nombre = e.target[0].value
    const eslogan = e.target[1].value
    const descripcion = e.target[2].value
    const primera_elaboracion = e.target[3].value
    const tipo_cervezas = e.target[4].value
    const atenuacion = e.target[5].value
    const contributed_by = e.target[6].value

    await createNewBeer({
      nombre,
      eslogan,
      descripcion,
      primera_elaboracion,
      tipo_cervezas,
      atenuacion,
      contributed_by
    })

    navigate('/')
  }
  return (
    <Row justify='center'>
      <Col span={20}>
        <Divider orientation='center'>Create a new beer</Divider>
        <form onSubmit={createBeer}>
          <label htmlFor='nombre'>
            nombre:
            <Input type='text' nombre='nombre' id='nombre' />
          </label>
          <label htmlFor='eslogan'>
            eslogan:
            <Input type='text' nombre='eslogan' id='eslogan' />
          </label>
          <label htmlFor='descripcion'>
            descripcion:
            <Input type='text' nombre='descripcion' id='descripcion' />
          </label>
          <label htmlFor='primera_elaboracion'>
            First brewed:
            <Input
              type='text'
              nombre='primera_elaboracion'
              id='primera_elaboracion'
            />
          </label>
          <label htmlFor='tipo_cervezas'>
            Brewer Tips:
            <Input type='text' nombre='tipo_cervezas' id='tipo_cervezas' />
          </label>
          <label htmlFor='atenuacion'>
            Attenuation level:
            <Input type='number' nombre='atenuacion' id='atenuacion' min={0} />
          </label>
          <label htmlFor='contributed_by '>
            Contributed by:
            <Input type='text' nombre='contributed_by ' id='contributed_by ' />
          </label>
          <Button
            htmlType='submit'
            type='primary'
            block
            style={{ marginTop: '1rem' }}
          >
            Create
          </Button>
        </form>
      </Col>
    </Row>
  )
}

export default NewBeer
