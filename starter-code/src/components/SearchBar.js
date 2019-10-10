import React, { Component } from 'react'

export default class SearchBar extends Component {


  constructor(props){
    super(props);
    this.state = {
      searchTerm:''
    }
  }

  // inputHandler = (e) => {
  //   // e.preventDefault();
  //   this.setState(
  //     {searchTerm: e.target.value})

  //     this.props.search(this.state.searchTerm)
  // }

  render() {
    return (
      <div style={{marginBottom:'10px'}}>
      <legend>Search</legend>
        <input style={{ width:'40%', margin:'0 auto'}}className="form-control" onChange={(e) => this.props.search(e.target.value)}  type="text" name="searchTerm" value={this.props.searchTerm} />
      </div>
    )
  }
}
