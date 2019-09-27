import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Input, Button, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input

export default class BeerForm extends Component {
  state = {
    beer: {}
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { beer } = this.state;
    console.log(beer)
    axios
      .post('https://ih-beer-api.herokuapp.com/beers/new', beer)
      .then(({ data }) => {
        console.log(data);
        message.success(data.message);
        this.setState({
          beer: {}
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleInputs = (e) => {
    const { beer } = this.state;
    let { name, value } = e.target
    beer[name] = value;
    this.setState({ beer });
  };

  render() {
    const { beer } = this.state
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >

        <Card title="Create a beer" style={{ width: '40vw' }}>
          <Form onSubmit={this.onSubmit} >
            <Form.Item>
              <Input value={beer.name ? beer.name : ''} onChange={this.handleInputs} type="text" name="name" placeholder="Name" />
            </Form.Item>

            <Form.Item>
              <Input value={beer.tagline ? beer.tagline : ''} onChange={this.handleInputs} type="text" name="tagline" placeholder="Tagline" />
            </Form.Item>

            <Form.Item>
              <TextArea value={beer.description ? beer.description : ''} onChange={this.handleInputs} name="description" rows={4} />
            </Form.Item>

            <Form.Item>
              <Input value={beer.first_brewed ? beer.first_brewed : ''} onChange={this.handleInputs} type="text" name="first_brewed" placeholder="First Brewed" />
            </Form.Item>

            <Form.Item>
              <Input value={beer.brewers_tips ? beer.brewers_tips : ''} onChange={this.handleInputs} type="text" name="brewers_tips" placeholder="Brewers Tips" />
            </Form.Item>

            <Form.Item>
              <Input value={beer.attenuation_level ? beer.attenuation_level : ''} onChange={this.handleInputs} type="number" min="0" name="attenuation_level" placeholder="Attenuation Level" />
            </Form.Item>

            <Form.Item>
              <Input value={beer.contributed_by ? beer.contributed_by : ''} onChange={this.handleInputs} type="text" name="contributed_by" placeholder="Contributed by" />
            </Form.Item>

            <Form.Item>
              <Input type="submit" value="Create" />
            </Form.Item>

            <Link to={'/'}>
              <Button type="primary" >Back Home</Button>
            </Link>
          </Form>
        </Card>
      </div>
    )
  }
}
