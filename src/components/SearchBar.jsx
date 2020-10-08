import React, { Component } from 'react';

class SearchBar extends Component {
  
    changeHandler = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    this.props.search(value);
  }

  render() {
    return (
      <div>
        <form>
          <span>Search</span>
          <div>
            <input type="text" name="search" onChange={this.changeHandler} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;