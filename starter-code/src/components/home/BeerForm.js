import React, { Component } from 'react'
import { Form, Input, Card } from 'antd'
import Nav from './Nav'
import axios from 'axios'
const { TextArea } = Input

class BeerForm extends Component {
  state = {
    beer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const { beer } = this.state
    axios
      .post('https://ih-beer-api.herokuapp.com/beers/new', beer)
      .then(({ data }) => {
        console.log(data)

        this.setState({
          character: {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: ''
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleInputs = e => {
    this.setState({
      beer: { ...this.state.beer, [e.target.name]: e.target.value }
    })
    console.log(this.state.beer)
  }

  render() {
    return (
      <>
        <Nav />
        <div style={{ width: '70%', marginLeft: '15%' }}>
          <Card>
            <Form onSubmit={this.onSubmit} labelCol={{ span: 0 }} wrapperCol={{ span: '100%' }}>
              <Form.Item label="Name">
                <Input
                  name="name"
                  required
                  onChange={this.handleInputs}
                  placeholder="Name"
                  style={{}}
                />
              </Form.Item>
              <Form.Item label="Tagline">
                <Input
                  name="tagline"
                  required
                  onChange={this.handleInputs}
                  placeholder="Tagline"
                  style={{}}
                />
              </Form.Item>
              <Form.Item label="Description">
                <TextArea
                  rows={5}
                  name="description"
                  required
                  onChange={this.handleInputs}
                  placeholder="Description"
                  style={{}}
                />
              </Form.Item>
              <Form.Item label="First Brewed">
                <Input
                  name="first_brewed"
                  required
                  onChange={this.handleInputs}
                  placeholder="First Brewed"
                  style={{}}
                />
              </Form.Item>
              <Form.Item label="Brewers Tips">
                <Input
                  name="brewers_tips"
                  required
                  onChange={this.handleInputs}
                  placeholder="Brewers Tips"
                  style={{}}
                />
              </Form.Item>
              <Form.Item label="Contributed by">
                <Input
                  name="contributed_by"
                  required
                  onChange={this.handleInputs}
                  placeholder="Contributed by"
                  style={{}}
                />
              </Form.Item>
              <Input
                type="submit"
                style={{ background: '#3dc4fc', color: 'white', border: 'none' }}
                value="Add Beer"></Input>
            </Form>
          </Card>
        </div>
      </>
    )
  }
}

export default BeerForm
