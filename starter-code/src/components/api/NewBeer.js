// Creates a new beer
import React, { Component } from 'react'
import { Layout, Icon, Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
const { Header, Content } = Layout

export default class NewBeer extends Component {
  state = {
    form: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const { form } = this.state
    axios
      .post('https://ih-beer-api.herokuapp.com/beers/new', form)
      .then(({ data }) => {
        console.log(data);
        this.setState({
          form: {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: ''
          }
        });
        this.props.history.push('/beers')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleInputs = (e) => {
    const { form } = this.state;
    const key = e.target.name;
    form[key] = e.target.value;
    this.setState({ form });
  };
  render() {
    const { form } = this.state

    return (
      <Layout>
        <Link to="/">
          <Header style={{ display: 'flex', justifyContent: 'center', background: '#40BBFD' }}>
            <Icon type="home" style={{ fontSize: '32px', color: '#fff', lineHeight: '64px' }} />
          </Header>
        </Link>
        <Content style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item label="Name">
              <Input name="name" value={form.name} type="text" onChange={this.handleInputs} />
            </Form.Item>
            <Form.Item label="Tag Line">
              <Input name="tagline" value={form.tagline} type="text" onChange={this.handleInputs} />
            </Form.Item>
            <Form.Item label="Description">
              <Input name="description" value={form.description} type="text" onChange={this.handleInputs} />
            </Form.Item>
            <Form.Item label="First Brewed">
              <Input name="first_brewed" value={form.first_brewed} type="text" onChange={this.handleInputs} />
            </Form.Item>
            <Form.Item label="Brewers Tips">
              <Input name="brewers_tips" value={form.brewers_tips} type="text" onChange={this.handleInputs} />
            </Form.Item>
            <Form.Item label="Attenuation Level">
              <Input min={1} name="attenuation_level" type="number" value={form.attenuation_level} onChange={this.handleInputs} />
            </Form.Item>
            <Form.Item label="Contributed By">
              <Input name="contributed_by" value={form.contributed_by} type="text" onChange={this.handleInputs} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={this.onSubmit}>Add new beer!</Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout >

    )
  }
}
