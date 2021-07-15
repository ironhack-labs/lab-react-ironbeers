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
              placeholder="Search"
              style={{
                width: '100%',
                height: '50px',
                margin: '10px 0 30px',
                borderRadius: '3px',
                border: 'none',
                backgroundColor: 'lightgray',
              }}
            />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;
