import React, { Component } from "react";
import { Pagination, Card, Icon } from "antd";
import MyLayout from "./layout/MyLayout";
import Axios from "axios";

export default class Beers extends Component {
  state = {
    beers: [],
    start: 0,
    max: 10,
    total: 0
  };

  componentDidMount() {
    Axios.get("https://ih-beer-api.herokuapp.com/beers")
      .then(({ data }) => {
        this.setState({
          beers: data.slice(this.state.start, this.state.max),
          total: data.length
        });
      })
      .catch(console.error);
  }

  handlePageChange(pageNumber) {
    this.setState({
      start: pageNumber
    });
  }

  render() {
    return (
      <MyLayout>
        <Pagination total={this.state.total} />
      </MyLayout>
    );
  }
}
