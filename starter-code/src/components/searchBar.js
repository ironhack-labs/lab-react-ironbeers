import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
  }

  onChange = (event) => {
    this.props.onFilter(event.target.value);
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <input className="input is-primary" type="text" placeholder="Search" 
          value={this.state.search}
          onChange={this.onChange} />
      </React.Fragment>
    );
  }
}

export default SearchBar;