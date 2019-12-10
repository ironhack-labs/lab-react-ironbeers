import React, { Component } from "react";
import MyLayout from "../component/layout/MyLayout";
import { Card, Form, Input } from "antd";
import axios from "axios";

export class NewBeer extends Component {
  state = {
    form: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contribution_by: ""
    }
  };

  onSubmit = e => {
    e.preventDefault();

    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", this.state.form)
      .then(() => {
        this.setState({
          form: {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contribution_by: ""
          }
        });
        this.props.history.push("/");
      })
      .catch(console.error);
  };

  handleInputs = e => {
    const { form } = this.state;
    const key = e.target.name;
    form[key] = e.target.value;
    this.setState({
      form
    });
  };

  render() {
    const { form } = this.state;
    return (
      <MyLayout>
        <Card title="Create Beer">
          <Form onSubmit={this.onSubmit}>
            <Form.Item label="Name">
              <Input
                value={form.name}
                name="name"
                onChange={this.handleInputs}
                type="text"
              />
            </Form.Item>
            <Form.Item label="Tagline">
              <Input
                value={form.tagline}
                name="tagline"
                onChange={this.handleInputs}
                type="text"
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                value={form.description}
                name="description"
                onChange={this.handleInputs}
                type="text"
              />
            </Form.Item>
            <Form.Item label="First Brewed">
              <Input
                value={form.first_brewed}
                name="first_brewed"
                onChange={this.handleInputs}
                type="text"
              />
            </Form.Item>
            <Form.Item label="Brewer Tips">
              <Input
                value={form.brewers_tips}
                name="brewers_tips"
                onChange={this.handleInputs}
                type="text"
              />
            </Form.Item>
            <Form.Item label="Attenuation Level">
              <Input
                value={form.attenuation_level}
                name="attenuation_level"
                onChange={this.handleInputs}
                type="number"
              />
            </Form.Item>
            <Form.Item label="Contributed By">
              <Input
                value={form.contribution_by}
                name="contributed_by"
                onChange={this.handleInputs}
                type="text"
              />
            </Form.Item>
            <Input value="Add New" type="submit" />
          </Form>
        </Card>
      </MyLayout>
    );
  }
}
