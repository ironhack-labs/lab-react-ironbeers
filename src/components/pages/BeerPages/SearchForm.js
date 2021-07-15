import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      query: '',
    };
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(
      {
        [name]: value,
      },
      () => this.props.filterList(this.state.query)
    );
  };

  render = () => (
    <Container>
      <Row className="g-0">
        <Col>
          <form>
            <input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleInputChange}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
