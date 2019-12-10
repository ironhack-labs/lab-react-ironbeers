import React, { Component } from "react";
import { Col, Pagination, Row } from "antd";
import MyLayout from "../component/layout/MyLayout";
import axios from "axios";
import Beer from "../component/beer";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  state = {
    beers: [],
    start: 0,
    currentPage: 1,
    max: 10,
    total: 0
  };

  componentDidMount() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(({ data }) => {
        this.setState({
          beers: data,
          total: data.length
        });
      })
      .catch(console.error);
  }

  handlePageChange(pageNum) {
    this.setState({
      start: (pageNum - 1) * this.state.max,
      currentPage: pageNum
    });
  }

  render() {
    return (
      <MyLayout>
        <Row>
          {this.state.beers
            .slice(this.state.start, this.state.start + this.state.max)
            .map(beer => (
              <Link to={`/beer/${beer._id}`}>
                <Col xl={6} sm={12} xs={24} key={beer._id}>
                  <Beer
                    name={beer.name}
                    image={beer.image_url}
                    tagline={beer.tagline}
                    contributionBy={beer.contribution_by}
                  />
                </Col>
              </Link>
            ))}
        </Row>
        <Pagination
          total={this.state.total}
          current={this.state.currentPage}
          onChange={pageNum => this.handlePageChange(pageNum)}
        />
      </MyLayout>
    );
  }
}
