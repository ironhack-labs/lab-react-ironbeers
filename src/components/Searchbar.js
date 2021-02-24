import React, { Component } from 'react';
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value }, () =>
      this.props.searchBeer(this.state.query)
    );
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          id="query"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Searchbar;
