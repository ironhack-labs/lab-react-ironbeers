import React, {Component} from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.handleChange} type="text" name={'query'} value={this.props.value}/>
      </div>
    );
  }
}

export default SearchForm;