import React from 'react';
import './Search.css';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  onChangeSearch = (event) => {
    this.setState({ search: event.target.value });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <form className="Search">
        <input
          value={this.state.search}
          onChange={(event) => this.onChangeSearch(event)}
          type="text"
          placeholder="   Search"
        ></input>
      </form>
    );
  }
}
