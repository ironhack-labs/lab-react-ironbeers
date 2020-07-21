import React, { Component,Fragment } from 'react';
export default class SearchBeer extends Component {
  state = {
    name: '',
  };

changeHandler = (event) => {this.setState({name: event.target.value,});this.props.searchProp(event.target.value);};
submitForm = async (event) => {event.preventDefault();this.props.searchProp(this.state.name);};
  render() {
    return (
      <div>
        <input onChange={this.changeHandler} type="text" name="name" id="beerName" />
      </div>
    );
  }
}

