import React, { Component } from 'react';
import { Card, Form, Input } from 'antd';
import axios from 'axios';

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
  };

  onSubmit = async e => {
    e.preventDefault();
    const { beer } = this.state;

    const beerCreated = await axios.post(`https://ih-beer-api.herokuapp.com/beers/new`, beer);

    console.log(beerCreated);

    this.props.history.push('/beers');
  };

  handleInputs = e => {
    const { beer } = this.state;
    const key = e.target.name;
    beer[key] = e.target.value;
    this.setState({ beer });
  };

  render() {
    const { beer } = this.state;

    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Card title="Add beer" style={{ width: '50vw' }}>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              <Input value={beer.name} onChange={this.handleInputs} type="text" name="name" placeholder="Name" />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.tagline}
                onChange={this.handleInputs}
                type="text"
                name="tagline"
                placeholder="Tagline"
              />
            </Form.Item>
            <Form.Item>
              <Input.TextArea
                value={beer.description}
                onChange={this.handleInputs}
                type="text"
                name="description"
                placeholder="Description"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.first_brewed}
                onChange={this.handleInputs}
                type="text"
                name="first_brewed"
                placeholder="First brewed"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.brewers_tips}
                onChange={this.handleInputs}
                type="text"
                name="brewers_tips"
                placeholder="Brewers tips"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.attenuation_level}
                onChange={this.handleInputs}
                type="number"
                name="attenuation_level"
                placeholder="Attenuation level"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.contributed_by}
                onChange={this.handleInputs}
                type="text"
                name="contributed_by"
                placeholder="Contributed by"
              />
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Add" />
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default BeerForm;
