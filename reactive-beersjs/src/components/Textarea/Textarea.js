import React, { Component } from 'react'

export default class Textarea extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <textarea name={this.props.name} id={this.props.name} onChange={this.props.onChange} />
      </div>
    )
  }
}
