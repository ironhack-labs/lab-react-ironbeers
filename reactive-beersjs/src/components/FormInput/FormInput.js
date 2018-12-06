import React, { Component } from 'react'

export default class FormInput extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input type={this.props.type} name={this.props.name} id={this.props.name} onChange={this.props.onChange}/>
      </div>
    )
  }
}
