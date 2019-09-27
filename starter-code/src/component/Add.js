import React, { Component } from 'react';
import { Card, Form, Input } from 'antd';
import axios from 'axios';

class Add extends Component {
  state = {
    beer: {
        name: '',
        tagline: '',
        first_brewed: '',
        contributed_by:'',
        description: '',
        image_url: '',
    }
  };

 
 

  onSubmit = async(e) => {
    e.preventDefault();
    const { beer } = this.state;
    const bere = await axios.post('https://ih-beer-api.herokuapp.com/beers/new', beer)
      console.log(bere)
        this.props.history.push('/beers')
   
    }
  

  handleInputs = (e) => {
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
          justifyContent: 'center',
          background: 'peru'
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
                placeholder="tagline"
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={beer.first_brewed}
                onChange={this.handleInputs}
                type="number"
                name="first_brewed"
                placeholder="first_brewed"
              />
            </Form.Item>
            <Form.Item>
              <Input value={beer.attenuation_level} onChange={this.handleInputs} type="number" name="attenuation_level" placeholder="beer attenuation level" />
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
                value={beer.image_url}
                onChange={this.handleInputs}
                type="text"
                name="image_url"
                placeholder="Image URL"
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




export default Add;