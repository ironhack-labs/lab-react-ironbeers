import React, { Component } from "react";
import axios from "axios";
import MyLayout from "../component/layout/MyLayout";
import { Col, Row } from "antd";
import Beer from "../component/beer";

export class BeerDetails extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(`https://ih-beer-api.herokuapp.com/beers/${id}`)
      .then(({ data }) => {
        this.setState({
          beer: data
        });
      })
      .catch(console.error);
  }

  render() {
    if (!this.state.beer._id) {
      return null;
    }
    return (
      <MyLayout>
        <Row>
          <Col xl={6} sm={12} xs={24} key={this.state.beer._id}>
            <Beer
              name={this.state.beer.name}
              image={this.state.beer.image_url}
              tagline={this.state.beer.tagline}
              contributionBy={this.state.beer.contribution_by}
            />
          </Col>
        </Row>
      </MyLayout>
    );
  }
}
