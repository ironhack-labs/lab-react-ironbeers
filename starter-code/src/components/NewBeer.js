import React, { Component } from 'react';
import { Card, Form, Input } from 'antd';
import axios from 'axios';

class NewBeer extends Component {
  state = {
    beer:{
        name:'',
        description: '',
        tagline: '',
        first_brewed: '',
        brewer_tips: '',
        contributed_by: '',
        attenuation_level: ''
    }
  };
     onSubmit = async (e) => {
    e.preventDefault();
    const { beer } = this.state
    const newBeer= await axios.post('https://ih-beer-api.herokuapp.com/beers/new', beer)
    console.log(newBeer)
        this.props.history.push('/beers')
    }

  handleInputs = (e) => {
    const { beer } = this.state;
    const key = e.target.name;
    beer[key] = e.target.value;
    this.setState({ beer });
  };

  render() {
    const { beer} = this.state;
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
        <Card title="Add new beer" style={{ width: '50vw' }}>
          
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
              <Input value={beer.name} onChange={this.handleInputs} type="text" name="name" placeholder="Beer Name" />
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
              <Input value={beer.first_brewed} onChange={this.handleInputs} type="text" name="first_brewed" placeholder="First Brewed" />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.brewer_tips}
                onChange={this.handleInputs}
                type="text"
                name="brewer_tips"
                placeholder="Brewer Tips"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.attenuation_level}
                onChange={this.handleInputs}
                type="number"
                name="attenuation_level"
                placeholder="Attenuation Level"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.contributed_by}
                onChange={this.handleInputs}
                type="text"
                name="contributed_by"
                placeholder="Contributed By"
              />
            </Form.Item>
            <Form.Item>
              <Input type="submit" value="Add"/>  
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default NewBeer;