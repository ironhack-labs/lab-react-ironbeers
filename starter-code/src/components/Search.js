import React from "react";
import InputField from './InputField';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }
  handleInputChange = e => {
    this.props.onSearchChange(e.target.value)
  }

  render() {
    return (
      <InputField name="searchTerm" placeholder="Enter your search" onChange={this.handleInputChange} value={this.props.searchTerm} type="text" />
    )
  }
}

export default Search;