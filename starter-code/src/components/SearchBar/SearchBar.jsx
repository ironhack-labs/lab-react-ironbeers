import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <form className="search-bar">
        <div className="field">
          <input type="text" autoComplete="off" onChange={(e) => this.props.filterText(e.target.value)} name="search" id="search" placeholder="Filter beers" className="input"/>
        </div>
      </form>
    )
  }
}
